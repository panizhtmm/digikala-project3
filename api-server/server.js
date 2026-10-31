
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const ANAKIN_API_KEY = process.env.ANAKIN_API_KEY;
const ANAKIN_BASE_URL = "https://api.anakin.io/v1";

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

// بررسی فعال بودن سرور
app.get("/", (req, res) => {
  res.json({
    message: "Digikala Anakin proxy is running",
  });
});

// دریافت نتیجه پردازش Anakin با شناسه درخواست
app.get("/api/job/:id", async (req, res) => {
  try {
    if (!ANAKIN_API_KEY) {
      return res.status(500).json({
        error: "ANAKIN_API_KEY is not configured",
      });
    }

    const jobId = encodeURIComponent(req.params.id);

    const response = await fetch(
      `${ANAKIN_BASE_URL}/url-scraper/${jobId}`,
      {
        method: "GET",
        headers: {
          "X-API-Key": ANAKIN_API_KEY,
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(30000),
      }
    );

    const data = await response.json();

    return res.status(response.status).json(data);

  } catch (error) {
    console.error("Anakin polling error:", error);

    return res.status(502).json({
      error: "Could not retrieve Anakin job",
      message: error.message,
    });
  }
});

// ارسال درخواست جست‌وجو به Anakin
app.get("/api/*", async (req, res) => {
  try {
    if (!ANAKIN_API_KEY) {
      return res.status(500).json({
        error: "ANAKIN_API_KEY is not configured",
      });
    }

    const apiPath = req.originalUrl.replace(/^\/api/, "");

    const targetUrl = new URL(
      apiPath,
      "https://www.digikala.com"
    );

    targetUrl.searchParams.delete("utm_source");

    console.log("Sending to Anakin:", targetUrl.toString());

    const response = await fetch(
      `${ANAKIN_BASE_URL}/url-scraper/scrape`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": ANAKIN_API_KEY,
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: targetUrl.toString(),
        }),
        signal: AbortSignal.timeout(100000),
      }
    );

    const body = await response.text();

    console.log("Anakin status:", response.status);

    let data;

    try {
      data = JSON.parse(body);
    } catch {
      data = { result: body };
    }

    return res.status(response.status).json(data);

  } catch (error) {
    console.error("Anakin proxy error:", error);

    return res.status(502).json({
      error: "Anakin request failed",
      message: error.message,
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server listening on port ${PORT}`);
});
