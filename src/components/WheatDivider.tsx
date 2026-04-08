const WheatDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px flex-1 max-w-[80px] bg-wheat/40" />
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-wheat">
      <path d="M24 30V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 8C22 6 20 3 20 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 8C26 6 28 3 28 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 14C21 12 18 10 17 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 14C27 12 30 10 31 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 20C21 18 18 16 17 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 20C27 18 30 16 31 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Grains */}
      <ellipse cx="20" cy="1" rx="2" ry="3.5" transform="rotate(-15 20 1)" fill="currentColor" opacity="0.6" />
      <ellipse cx="28" cy="1" rx="2" ry="3.5" transform="rotate(15 28 1)" fill="currentColor" opacity="0.6" />
      <ellipse cx="17" cy="8" rx="2" ry="3.5" transform="rotate(-25 17 8)" fill="currentColor" opacity="0.6" />
      <ellipse cx="31" cy="8" rx="2" ry="3.5" transform="rotate(25 31 8)" fill="currentColor" opacity="0.6" />
      <ellipse cx="17" cy="14" rx="2" ry="3.5" transform="rotate(-25 17 14)" fill="currentColor" opacity="0.6" />
      <ellipse cx="31" cy="14" rx="2" ry="3.5" transform="rotate(25 31 14)" fill="currentColor" opacity="0.6" />
    </svg>
    <div className="h-px flex-1 max-w-[80px] bg-wheat/40" />
  </div>
);

export default WheatDivider;
