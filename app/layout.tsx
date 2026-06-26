import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VividDev — Web Development Studio",
  description: "A two-person studio crafting fast, polished websites and web apps for startups, agencies, and local businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif", margin: 0 }}>{children}</body>
    </html>
  );
}
