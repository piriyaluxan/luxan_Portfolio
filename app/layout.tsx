import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piriyaluxan Sutheskumar | Frontend Engineer",
  description: "Full Stack Developer specializing in React, Next.js & Node.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
