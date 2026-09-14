import Image from "next/image";

export type CompanyName =
  | "Tekrevol"
  | "The Pipeline Group"
  | "MEDZnMORE";

type CompanyLogoProps = {
  company: CompanyName;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: {
    frame: "h-12 w-12 rounded-[14px]",
    inner: "inset-[3px] rounded-[11px]",
    image: "p-1.5",
  },
  md: {
    frame: "h-16 w-16 rounded-[18px]",
    inner: "inset-[4px] rounded-[14px]",
    image: "p-2",
  },
  lg: {
    frame: "h-[78px] w-[78px] rounded-[22px]",
    inner: "inset-[4px] rounded-[17px]",
    image: "p-2.5",
  },
};

const companyData = {
  Tekrevol: {
    src: "/portfolio/company-logos/tekrevol.png",
    alt: "Tekrevol logo",
    surface: "bg-[#07111f]",
    glow: "bg-orange-500/[0.15]",
    border: "border-orange-400/25",
  },

  "The Pipeline Group": {
    src: "/portfolio/company-logos/pipeline-group.webp",
    alt: "The Pipeline Group logo",
    surface: "bg-white",
    glow: "bg-sky-500/[0.13]",
    border: "border-sky-400/20",
  },

  MEDZnMORE: {
    src: "/portfolio/company-logos/medznmore.jfif",
    alt: "MEDZnMORE logo",
    surface: "bg-white",
    glow: "bg-emerald-500/[0.13]",
    border: "border-emerald-400/20",
  },
} satisfies Record<
  CompanyName,
  {
    src: string;
    alt: string;
    surface: string;
    glow: string;
    border: string;
  }
>;

export default function CompanyLogo({
  company,
  size = "md",
  className = "",
}: CompanyLogoProps) {
  const logo = companyData[company];
  const sizing = sizes[size];

  return (
    <div
      className={`group relative shrink-0 ${sizing.frame} ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-1 rounded-[inherit] ${logo.glow} blur-xl transition duration-300 group-hover:scale-110`}
      />

      <div
        className={`absolute inset-0 overflow-hidden rounded-[inherit] border ${logo.border} bg-[linear-gradient(145deg,rgba(15,30,49,.98),rgba(5,14,26,.99))] shadow-[0_16px_40px_rgba(0,0,0,.3),inset_0_1px_0_rgba(255,255,255,.06)]`}
      >
        <div
          className={`absolute ${sizing.inner} overflow-hidden border border-white/[0.07] ${logo.surface}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            unoptimized
            draggable={false}
            sizes={
              size === "lg"
                ? "78px"
                : size === "md"
                  ? "64px"
                  : "48px"
            }
            className={`object-contain ${sizing.image}`}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.045] to-transparent" />
      </div>
    </div>
  );
}