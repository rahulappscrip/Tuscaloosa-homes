import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/logo-updated.webp"
      alt="We Buy Tuscaloosa Homes"
      title="We Buy Tuscaloosa Homes — Tuscaloosa cash home buyer"
      width={1600}
      height={335}
      className={className}
      priority
    />
  );
}
