import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/logo.svg"
      alt=""
      width={185}
      height={179}
      className={className}
      priority
    />
  );
}
