import NextImage from "next/image";

type PortfolioImageProps = {
  src?: string | null;
  alt: string;
  label?: string;
  title?: string;
  description?: string;
  aspectClass?: string;
  priority?: boolean;
};

export default function PortfolioImage({
  src,
  alt,
  label = "Portfolio Media",
  title = "Project Media",
  description = "Verified portfolio project imagery.",
  aspectClass = "aspect-[16/10]",
  priority = false,
}: PortfolioImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] border border-blue-400/15 bg-[#050d18] ${aspectClass}`}
    >
      {src ? (
        <>
          {/* SUBTLE BACKDROP */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,.07),transparent_65%)]" />

          {/* REAL IMAGE */}

          <NextImage
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={95}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="relative z-10 object-contain"
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,.12),transparent_38%),radial-gradient(circle_at_75%_70%,rgba(6,182,212,.08),transparent_38%)]" />

          <div className="absolute inset-5 rounded-[18px] border border-dashed border-slate-400/15" />

          <div className="absolute inset-0 grid place-items-center p-8">
            <div className="max-w-[360px] text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.06]">
                <div className="grid grid-cols-2 gap-1">
                  <span className="h-2.5 w-2.5 rounded-sm bg-blue-500/70" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-cyan-400/70" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-cyan-400/40" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-blue-500/40" />
                </div>
              </div>

              <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-cyan-400">
                {label}
              </p>

              <p className="mt-3 text-sm font-semibold text-white">
                {title}
              </p>

              <p className="mx-auto mt-2 max-w-[300px] text-[9px] leading-5 text-slate-600">
                {description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}