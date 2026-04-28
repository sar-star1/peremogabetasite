import wheatMark from "@/assets/peremoga-mark.png";

const WheatDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px flex-1 max-w-[80px] bg-wheat/40" />
    <img
      src={wheatMark}
      alt=""
      aria-hidden="true"
      className="h-10 w-auto object-contain"
      loading="lazy"
    />
    <div className="h-px flex-1 max-w-[80px] bg-wheat/40" />
  </div>
);

export default WheatDivider;
