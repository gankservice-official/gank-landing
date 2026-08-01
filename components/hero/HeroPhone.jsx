import Image from "next/image";

export default function HeroPhone() {
    return (
        <div className="relative mx-auto w-[320px] sm:w-[360px]">
          {/* Glow */}
          <div
           className="
             absolute
             inset-0
             -z-10
             scale-110
             rounded-[48px]
             blur-3xl
             opacity-40
            "
            style={{
                background:
                  "radial-gradient(circle, rgba(20,241,217,.28), transparent 70%)",
            }}
          />

          {/* Phone */}
          <div className="rounded-[42px] border border-white/10 bg-[#090F1E] p-3 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
          {/* Screen */}
          <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,#101A3A_0%,#0B1225_100%)]">
            {/* Dynamic Island */}
            <div className="flex justify-center py-4">
                <div className="h-7 w-28 rounded-full bg-black" />
            </div>
            {/* Logo */}
            <div className="px-8 pt-6">
                <Image
                  src="/logo.svg"
                  alt="GANK SERVICE"
                  width={180}
                  height={180}
                  className="mx-auto w-32"
                />
            </div>

            {/* Title */}
            <div className="px-8 pt-8 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Repair Lab 
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                    System Check
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                    Professional diagnostic workflow for every repair.
                </p>

                {/* Progress */}
                <div className="px-8 pt-10">
                    <div className="flex items-center justify-between text-xs text-white/60">
                     <span>Diagnostics</span>
                     <span>92%</span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[92%] rounded-full bg-[var(--primary)]" />
                    </div>
                </div>

                {/* Status */}
                <div className="space-y-4 px-8 py-10">
                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                     <span className="text-white">
                        Display
                     </span>

                     <span className="text-[var(--primary)]">
                        Ready
                     </span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                     <span className="text-white">
                        Battery
                     </span>
                     
                     <span className="text-[var(--primary)]">
                        Healthy
                     </span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                     <span className="text-white">
                        Final Check   
                     </span>
                     
                     <span className="text-[var(--primary)]">
                        Passed
                     </span>
                    </div>                     
              </div>
            </div>
        </div>
    </div>
    );
}