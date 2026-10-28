
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
  res.json({
    message: "Digikala API proxy is running"
  });
});

app.get("/api/*", async (req, res) => {
  try {
    const apiPath = req.originalUrl.replace(/^\/api/, "");
    const targetUrl = new URL(
      apiPath,
      "https://api.digikala.com"
    );

    targetUrl.searchParams.delete("utm_source");

    const response = await fetch(targetUrl.toString(), {
      redirect: "manual",
     headers: {
  Accept: "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "Referer": "https://www.digikala.com/",
  "Origin": "https://www.digikala.com",
  "Accept-Language": "fa-IR,fa;q=0.9,en-US;q=0.8,en;q=0.7"
},
      signal: AbortSignal.timeout(15000)
    });

    console.log("Requested URL:", targetUrl.toString());
    console.log("Response status:", response.status);
    console.log(
      "Redirect location:",
      response.headers.get("location")
    );

    const body = await response.text();

    res.status(response.status);
    res.setHeader(
      "Content-Type",
      response.headers.get("content-type") ||
        "application/json"
    );

    res.send(body);
  } catch (error) {
    console.error("API request failed:", error);

    res.status(502).json({
      error: "Digikala API request failed",
      details: error.cause?.message || error.message
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server listening on port ${PORT}`);
});
