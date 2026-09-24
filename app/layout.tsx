import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vijay Jadhav | Software Developer & Automation Engineer",
  description: "Portfolio of Vijay Jadhav. Detail-oriented developer specializing in Python, SQL, APIs, and enterprise workflow automations.",
  keywords: ["Vijay Jadhav", "Software Developer", "Automation Engineer", "MIS Executive", "Luna Technologies", "Python", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
