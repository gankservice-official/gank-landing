export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Aurora Glow */}
            <div
              className="
                absolute
                left-1/2
                top-[-18rem]
                h-[42rem]
                w-[42rem]
                -translate-x-1/2
                rounded-full
                blur-3x1
                opacity-60
              "
              style={{
                background:
                  "radial-gradient(circle,rgba(20,241,217,.18) 0%, rgba(20,241,217,.08) 35%, transparent 70%)",
              }}
            />

            {/* Secondary Glow */}
            <div
              className="
                absolute
                right-[-12rem]
                top-40
                h-[26rem]
                w-[26rem]
                rounded-full
                blur-3x1
                opacity-30
              "
              style={{
                background:
                    "radial-gradient(circle, rgba(20,241,217,.14) 0%, transparet 70%)",
              }}
            />

            {/* Grid */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.05]
              "
              style={{
                backgroundImage:
                    "radial-gardient(circle, rgba(255,255,255,.18) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
          </div>
        );
}