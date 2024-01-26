import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({ weight: ["400"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TODO by Kuba",
  description: "Simple web app, where you can create and delete your todos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${titillium.className} bg-cyan-50`}>{children}</body>
    </html>
  );
}
