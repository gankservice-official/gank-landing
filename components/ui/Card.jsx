export default function Card({
    children,
    className = "",
    hover = true,
    glow = false,
}) {
    return (
        <div
         className={`
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-[rgba(14,20,40,.72)]
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,.35)]
            transition-all
            duration-500

            ${
                hover
                  ? "hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_30px_80px_rgba(20,241,217,.12)]"
                  : ""
            }

            ${glow ? "ring-1 ring-[var(--primary)]/30" : ""}

            ${className}
        `}
    >
        {/* Top Highlight */}
        <div
         className="
            absolute
            inset-x-0
            top-0
            bg-gradient-to-r
            from-transparent
            via-[var(--primary)]
            to-transparent
            opacity-70
          "
        />
        
        {children}
      </div>
    );
}