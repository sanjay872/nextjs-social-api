import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import './globals.css';
import ImportBS from "@/components/ImportBS";

const exo = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media API",
  description: "Deploy your Next.js app with Defang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <ImportBS />
        {children}
      </body>
    </html>
  );
}
