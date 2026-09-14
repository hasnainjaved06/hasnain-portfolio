type IssuerLogoProps = {
  src: string;
  issuer: string;
  compact?: boolean;
  className?: string;
};

export default function IssuerLogo({
  src,
  issuer,
  compact = false,
  className = "",
}: IssuerLogoProps) {

  const isGoogle =
    issuer.toLowerCase() === "google";

  if (isGoogle) {

    return (
      <div
        className={`grid shrink-0 place-items-center rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,.28)] ${
          compact
            ? "h-11 w-11 p-1.5"
            : "h-16 w-16 p-2"
        } ${className}`}
      >

        <img
          src={src}
          alt={`${issuer} logo`}
          className="h-full w-full object-contain"
        />

      </div>
    );
  }


  return (
    <div
      className={`flex shrink-0 items-center ${
        compact
          ? "min-h-[36px]"
          : "min-h-[52px]"
      } ${className}`}
    >

      <img
        src={src}
        alt={`${issuer} logo`}
        className={`block h-auto w-auto object-contain ${
          issuer === "Macquarie University"
            ? compact
              ? "max-h-[42px] max-w-[130px]"
              : "max-h-[60px] max-w-[170px]"
            : compact
              ? "max-h-[30px] max-w-[130px]"
              : "max-h-[42px] max-w-[180px]"
        }`}
      />

    </div>
  );
}
