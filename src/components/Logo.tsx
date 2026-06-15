import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/logo.png"
      alt="We Buy Tuscaloosa Homes"
      width={1061}
      height={235}
      className={className}
      priority
    />
  );
}
