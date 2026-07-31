export default function Home() {
    return (
        <main className="min-h-screen bg-[#000000] text-white">
            {/* HERO */}
            <section className="section">
                <div className="container-custom">
                    <div className="rounded-3x1 border-4 border-lime-300 p-10">
                        <p className="mb-4 text-sm font-bold uppercase tracing-[0.25em] text-lime-300">
                            GANK SERVICE
                        </p>

                        <h1 className="mb-6 text-5x1 font-black leading-tight md:text-7x1">
                            SERVIS HP
                            <br />
                            CEPAT
                            <br />
                            BERGARANSI
                        </h1>

                        <p className="max-w-xl text-lg text-white/80">
                            Landing page sedang dibangun, Selanjutnya Hero Section akan diganti dengan full Neo-Brutalist + Framer Motion.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button className="btn-primary">
                                Chat WhatsApp
                            </button>

                            <button classNmae="btn-secondary">
                                Lihat Layanan
                            </button>
                        </div>
                    </div>                    
                </div>
            </section>
        </main>
    );
}