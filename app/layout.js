import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gankservice.web.id"),

  title: {
    default:"GANK SERVICE ",
    template: "%s | GANK SERVICE",
  },

  description:
    " Professional Smartphone Repair Lab. Servis smartphone cepat, presisi, transparan, dan bergaransi oleh teknisi berpengalaman.",

  applicationName: "GANK SERVICE",

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

  publisher: "GANK SERVICE",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "GANK SERVICE",
    description: "Professional Repair for Modern Smartphones",
    url: "https://gankservice.web.id",
    siteName: "GANK SERVICE",
    type: "website",
    locale: "id_ID",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "GANK SERVICE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GANK SERVICE",
    description: "Professional Repair for Modern Smartphones",
    images: ["/opengraph-image.png"],
  },

  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070B16"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`
          ${headingFont.variable}
          ${bodyFont.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
