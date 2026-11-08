export default function Sparkle({ className = "", ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor" {...rest}>
      <path d="M12 0C12.6 6.5 17.5 11.4 24 12C17.5 12.6 12.6 17.5 12 24C11.4 17.5 6.5 12.6 0 12C6.5 11.4 11.4 6.5 12 0Z" />
    </svg>
  );
}
