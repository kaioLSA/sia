export function Logo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/images/logo.svg"
      alt="Sette IA"
      width={size}
      height={size * 0.32}
      className={className}
      style={{ height: 'auto' }}
    />
  );
}

export function LogoIcon({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <path d="M20 65L40 45L60 65L40 85Z" fill="currentColor" />
      <path d="M40 45L60 25L80 45L60 65Z" fill="currentColor" />
      <path d="M30 55L50 35L55 40L35 60Z" fill="currentColor" fillOpacity={0.6} />
    </svg>
  );
}
