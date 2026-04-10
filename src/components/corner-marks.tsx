export function CornerMarks({ className = "" }: { className?: string }) {
  const mark = "w-4 h-4 border-corner";
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className={`absolute top-0 left-0 ${mark} border-t border-l`} />
      <div className={`absolute top-0 right-0 ${mark} border-t border-r`} />
      <div className={`absolute bottom-0 left-0 ${mark} border-b border-l`} />
      <div className={`absolute bottom-0 right-0 ${mark} border-b border-r`} />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-4 bg-border" />
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-tertiary">
        {children}
      </span>
    </div>
  );
}
