import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable:'--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ 
  subsets: ["latin"], 
  weight: ["400","700"],
  variable: '--font-ibm-plex-serif',
});

export const metadata: Metadata = {
  title: "BanKey",
  description: "Bankey is a banking platform, that is aimed to provide a secure and easy way to manage your bank accounts",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
