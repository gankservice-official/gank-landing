import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "GANK SERVICE | Precision Repair for Modern Smartphones",

  description:
    " Professional Smartphone Repair Lab. Servis smartphone cepat, presisi, transparan, dan bergaransi oleh teknisi berpengalaman.",

  keywords: [
    "Servis HP",
    "Servis Smartphone",
    "Ganti LCD",
    "Ganti Baterai",
    "Ganti Kamera",
    "Ganti Speaker",
    "Ganti Charging Port",
    "Ganti Tombol Power",
    "Ganti Tombol Volume",
    "Repair Lab",
    "GANK SERVICE",
    "GANK SERVIS",
  ],

  authors: [
    {
      name: "GANK SERVICE",
    },
  ],

  creator: "GANK SERVICE",

  metadataBase: new URL("https://gankservice.web.id"),

  openGraph: {
    title: "GANK SERVICE",
    
    description: "Professional Repair for Modern Smartphones",

    type: "website",

    locale: "id_ID",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`
          ${plusJakarta.variable}
          ${inter.variable}
          bg-[var(--background)]
          text-[var(--text)]
          antaliased
        `}
      >
        {children}
      </body>
    </html>
  );
}
