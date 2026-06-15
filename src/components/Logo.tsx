export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <polygon
        points="40,4 74,22 74,58 40,76 6,58 6,22"
        fill="#1A2332"
        stroke="#2BBCD4"
        strokeWidth="3"
      />
      <polygon points="40,4 74,22 74,58 40,76 6,58 6,22" fill="#1A2332" />
      <path
        d="M22 44 L40 28 L58 44"
        stroke="#2BBCD4"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="30" y="44" width="20" height="16" rx="1" fill="#2BBCD4" opacity="0.8" />
      <rect x="36" y="50" width="8" height="10" rx="1" fill="#1A2332" />
      <rect x="14" y="54" width="16" height="2" rx="1" fill="#F5C518" opacity="0.9" />
      <rect x="14" y="58" width="12" height="2" rx="1" fill="#F5C518" opacity="0.6" />
    </svg>
  );
}
