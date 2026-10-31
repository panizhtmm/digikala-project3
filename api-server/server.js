
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const ANAKIN_API_KEY = process.env.ANAKIN_API_KEY;
const ANAKIN_URL = "https://api.anakin.io/v1/url-scraper/scrape";

const ALLOWED_ORIGINS = [
  "https://panizhtmm.github.io",
  "http://localhost:5173",
];

app.use(express.json());

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
  res.json({ message: "Digikala Anakin proxy is running" });
});

app.get("/api/*", async (req, res) => {
  try {
    if (!ANAKIN_API_KEY) {
      return res.status(500).json({
        error: "ANAKIN_API_KEY is not configured",
      });
    }

    const apiPath = req.originalUrl.replace(/^\/api/, "");
    const targetUrl = new URL(apiPath, "https://www.digikala.com");

    const response = await fetch(ANAKIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": ANAKIN_API_KEY,
      },
      body: JSON.stringify({
        url: targetUrl.toString(),
      }),
      signal: AbortSignal.timeout(60000),
    });

    const body = await response.text();

    console.log("Anakin status:", response.status);

    if (!response.ok) {
      return res.status(502).json({
        error: "Anakin request failed",
        status: response.status,
        details: body.slice(0, 1000),
      });
    }

    let data;

    try {
      data = JSON.parse(body);
    } catch {
      data = { result: body };
    }

    return res.json(data);

  } catch (error) {
    console.error("Anakin proxy error:", error);

    return res.status(502).json({
      error: "Proxy request failed",
      message: error.message,
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server listening on port ${PORT}`);
});
