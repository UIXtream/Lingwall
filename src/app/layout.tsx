import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingwall | Architect Your Future",
  description: "10-Month immersive journey from beginner to Full-Stack Design & AI Architect.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is REQUIRED for next-themes to prevent console errors
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Header MUST be inside ThemeProvider to access dark/light mode logic */}
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}