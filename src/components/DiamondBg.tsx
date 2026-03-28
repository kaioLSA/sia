export function DiamondBg({ className = '', opacity = 'opacity-100' }: { className?: string; opacity?: string }) {
  return (
    <img
      src="/images/bg-diamond.svg"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${opacity} ${className}`}
    />
  );
}
