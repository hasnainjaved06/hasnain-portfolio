import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
} from "lucide-react";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="grid min-h-[80vh] place-items-center px-6 pb-24 pt-36"
    >

      <div className="mx-auto max-w-[760px] text-center">

        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">

          <BarChart3 size={23} />

        </div>

        <p className="mt-8 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-400">
          Error 404
        </p>

        <h1 className="mt-4 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.06em] text-white">
          This Data Point{" "}
          <span className="gradient-text">
            Doesn&apos;t Exist.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[580px] text-sm leading-7 text-slate-400">
          The page may have moved, the URL may be
          incorrect, or the resource may not have
          been published yet.
        </p>

        <div className="mt-9 flex justify-center">

          <Link
            href="/"
            className="btn-primary"
          >
            <ArrowLeft size={16} />
            Return Home
          </Link>

        </div>

      </div>

    </main>
  );
}
