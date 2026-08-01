import Link from "next/link";

export default function Button ({
    children,
    href = "#",
    variant = "primary",
    className = "",
}) {
    const base =
        "inline-flex items-center justify-center rounded-[18px] px-6 py-3 font-semibold transition-all duration-300";
    
    const styles = {
        primary: "bg-[var(--primary)] text-[#071019] hover:scale-[1.0] hover:shadow-[0_0_40px_rgba(20,241,217,.5)]",
        
        secondary: "border border-white/10 bg-white/5 text-white hover:border-[var(--primary)] hover:bg-white/10",

        ghost: "text-white hover:text-[var(--primary)]",
    };

    return (
        <Link
         href={href}
         className={`${base} ${styles[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}