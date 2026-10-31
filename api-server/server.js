
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const ALLOWED_ORIGINS = [
  "https://panizhtmm.github.io",
  "http://localhost:5173",
];

app.use(express.json());

// تنظیمات CORS
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
    message: "Digikala API proxy is running",
  });
});

// اتصال به API دیجی‌کالا
app.get(/^\/api\/(.*)/, async (req, res) => {
  try {
    const apiPath = req.originalUrl.replace(/^\/api/, "");

    const targetUrl = new URL(
      apiPath,
      "https://api.digikala.com"
    );

    // حذف پارامتر ردیابی
    targetUrl.searchParams.delete("utm_source");

    console.log("Requested URL:", targetUrl.toString());

    const response = await fetch(targetUrl, {
      method: "GET",
      redirect: "manual",
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://www.digikala.com/",
      },
      signal: AbortSignal.timeout(30000),
    });

    console.log("Upstream status:", response.status);
    console.log(
      "Redirect location:",
      response.headers.get("location")
    );

    // بررسی ریدایرکت
    if (response.status >= 300 && response.status < 400) {
      return res.status(200).json({
        redirectStatus: response.status,
        redirectLocation: response.headers.get("location"),
        requestedUrl: targetUrl.toString(),
      });
    }

    const body = await response.text();

    console.log(
      "Content-Type:",
      response.headers.get("content-type")
    );

    // بررسی JSON بودن پاسخ
    let data;

    try {
      data = JSON.parse(body);
    } catch {
      return res.status(502).json({
        error: "Digikala did not return valid JSON",
        upstreamStatus: response.status,
        contentType: response.headers.get("content-type"),
        finalUrl: response.url,
        preview: body.slice(0, 500),
      });
    }

    return res.status(response.status).json(data);

  } catch (error) {
    console.error("Digikala API error:", error);
    console.error("Error cause:", error.cause);

    return res.status(502).json({
      error: "Could not connect to Digikala API",
      message: error.message,
      cause: error.cause?.message || null,
      code: error.cause?.code || null,
    });
  }
});

// اجرای سرور
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server listening on port ${PORT}`);
});
