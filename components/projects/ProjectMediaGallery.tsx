import PortfolioImage from "@/components/media/PortfolioImage";
import type { PortfolioScreenshot } from "@/data/portfolioMedia";

type ProjectMediaGalleryProps = {
  title: string;
  screenshots: PortfolioScreenshot[];
};

export default function ProjectMediaGallery({
  title,
  screenshots,
}: ProjectMediaGalleryProps) {
  if (screenshots.length === 0) {
    return null;
  }

  const [featuredScreenshot, ...remainingScreenshots] = screenshots;

  return (
    <div>
      {/* FEATURED SCREENSHOT */}

      <article className="overflow-hidden rounded-[28px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(15,30,49,.60),rgba(6,16,29,.90))] p-4 sm:p-5">
        <PortfolioImage
          src={featuredScreenshot.src}
          alt={featuredScreenshot.alt}
          label={featuredScreenshot.label}
          aspectClass="aspect-[16/9]"
          priority
        />

        <div className="flex flex-col gap-3 px-1 pb-1 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
              Featured Dashboard View
            </p>

            <h3 className="mt-2 text-base font-semibold text-white">
              {featuredScreenshot.label}
            </h3>
          </div>

          <span className="rounded-full border border-green-400/10 bg-green-400/[0.025] px-3 py-2 text-[8px] font-medium text-green-300">
            Verified Project Screenshot
          </span>
        </div>
      </article>

      {/* REMAINING SCREENSHOTS */}

      {remainingScreenshots.length > 0 && (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {remainingScreenshots.map((screenshot, index) => (
            <article
              key={`${screenshot.src}-${index}`}
              className="group overflow-hidden rounded-[24px] border border-slate-400/10 bg-white/[0.015] p-4 transition duration-300 hover:border-blue-400/25 hover:shadow-[0_22px_65px_rgba(37,99,235,.08)]"
            >
              <PortfolioImage
                src={screenshot.src}
                alt={screenshot.alt}
                label={screenshot.label}
                aspectClass="aspect-[16/10]"
              />

              <div className="px-1 pb-1 pt-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                      Dashboard View{" "}
                      {String(index + 2).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-sm font-semibold text-white">
                      {screenshot.label}
                    </h3>
                  </div>

                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.45)]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* GALLERY FOOTER */}

      <div className="mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-slate-400/10" />

        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
          {screenshots.length} verified dashboard{" "}
          {screenshots.length === 1 ? "view" : "views"} • {title}
        </p>

        <span className="h-px w-10 bg-slate-400/10" />
      </div>
    </div>
  );
}