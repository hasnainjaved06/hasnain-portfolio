import { ImageResponse } from "next/og";

export const alt =
  "Hasnain Javed - Data Analyst and Business Intelligence Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #06101d 0%, #081426 52%, #0b1727 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(6, 182, 212, 0.16)",
            filter: "blur(90px)",
            top: -220,
            right: -120,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.18)",
            filter: "blur(100px)",
            bottom: -240,
            left: -100,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 34,
            borderRadius: 30,
            border: "1px solid rgba(148, 163, 184, 0.18)",
            background: "rgba(11, 23, 39, 0.72)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                  color: "#ffffff",
                  fontSize: 21,
                  fontWeight: 800,
                }}
              >
                HJ
              </div>

              Hasnain Javed
            </div>

            <div
              style={{
                display: "flex",
                padding: "11px 18px",
                borderRadius: 999,
                border: "1px solid rgba(6, 182, 212, 0.35)",
                background: "rgba(6, 182, 212, 0.08)",
                color: "#67e8f9",
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              Analytics Portfolio
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 920,
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#67e8f9",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Data • Business Intelligence • Automation
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 68,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: -3,
                marginBottom: 24,
              }}
            >
              Data Analyst & Business Intelligence
            </div>

            <div
              style={{
                display: "flex",
                color: "#cbd5e1",
                fontSize: 25,
                lineHeight: 1.45,
                maxWidth: 900,
              }}
            >
              Power BI • SQL • DAX • Python • KPI Reporting • Dashboard
              Development
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#94a3b8",
              fontSize: 18,
            }}
          >
            <div style={{ display: "flex", gap: 28 }}>
              <span>5+ Years Experience</span>
              <span>8+ Analytics Projects</span>
              <span>Karachi, Pakistan</span>
            </div>

            <div
              style={{
                display: "flex",
                color: "#67e8f9",
                fontWeight: 600,
              }}
            >
              hasnain-portfolio-iliac.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}