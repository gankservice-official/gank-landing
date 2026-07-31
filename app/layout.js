import "./globals.css";

export const metadata = {
  title: "GANK SERVICE | Smartphone Solutions",
  description: "GANK SERVICE adalah jasa servis HP cepat, terpercaya, dan bergaransi. LCD, Baterai, Charging, Software, Kamera, hingga kerusakan akibat air",
  keywords: [
    "GANK SERVICE",
    "GANK SERVICE Smartphone Solutions",
    "GANK SERVICE Servis HP",
    "Ganti LCD",
    "Ganti Baterai",
    "Ganti Charging",
    "Ganti Software",
    "Ganti Kamera",
    "Kerusakan akibat air",
    "Custom ROM",
    "Rooting",
    "Unlock Bootloader",
    "Unlock FRP",
    "Unlock Jaringan",
  ],
  authors: [
    {
       name: "GANK SERVICE",
    },
  ],
  opensGraph: {
    title: "GANK SERVICE",
    description: "Servis HP cepat, terpercaya, dan bergaransi.",
    type: "website",
    locale: "id_ID",
    siteName: "GANK SERVICE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
       {children}
      </body>
    </html>
  );
}