
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const ALLOWED_ORIGINS = [
  "https://panizhtmm.github.io",
  "http://localhost:5173",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Digikala API proxy is running" });
});

app.get("/api/*", async (req, res) => {
  try {
    const apiPath = req.originalUrl.replace(/^\/api/, "");
    const targetUrl = new URL(apiPath, "https://api.digikala.com");

    targetUrl.searchParams.delete("utm_source");

    console.log("Requesting:", targetUrl.toString());

    const response = await fetch(targetUrl, {
      redirect: "manual",
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        Referer: "https://www.digikala.com/",
        "X-Web-Client-Id": "web",
        "X-Web-Client": "desktop",
        "X-Web-Optimize-Response": "1",
      },
      signal: AbortSignal.timeout(20000),
    });

    const body = await response.text();
    const location = response.headers.get("location");
    const contentType = response.headers.get("content-type");

    console.log("Upstream status:", response.status);
    console.log("Redirect location:", location);
    console.log("Content type:", contentType);

    if (response.status >= 300 && response.status < 400) {
      return res.status(502).json({
        error: "Digikala returned a redirect",
        upstreamStatus: response.status,
        redirectLocation: location,
        contentType,
        details: body.slice(0, 500),
      });
    }

    if (!response.ok) {
      return res.status(502).json({
        error: "Digikala API request failed",
        upstreamStatus: response.status,
        contentType,
        details: body.slice(0, 500),
      });
    }

    res.status(response.status);
    res.setHeader(
      "Content-Type",
      contentType || "application/json"
    );
    res.send(body);

  } catch (error) {
    console.error("Proxy error:", error);
    console.error("Error cause:", error.cause);

    res.status(502).json({
      error: "Proxy request failed",
      message: error.message,
      cause: error.cause?.message || null,
      code: error.cause?.code || null,
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server listening on port ${PORT}`);
});
