export default function Badge({
    children,
    variant = "primary",
    className = "",
}) {
    const variants = {
        primary: "bg-[rgba(20,241,217,.12)] text-[var(--primary)] border-[rgba(20,241,217,.25)]",

        dark: "bg-white/5 text-white border-white/10",

        danger: "bg-[rgba(255,92,92,.12)] text-[#FF8A8A] border-[rgba(255,92,92,.25)]",
    };

    return (
        <span
            className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-4
                py-2
                text-xs
                font-semibold
                tracking-[0.12em]
                uppercase
                backdrop-blur-md
                transition-all
                duration-300

                ${variants[variant]}
                
                ${className}
            `}
        >
            <span
                className={`
                h-2
                w-2
                rounded-full

                ${
                  variant === "danger"
                    ? "bg-[#FFC5C5]"
                    : "bg-[var(--primary)]"
                }
            `}
            />

            {children}
        </span>
    );
}