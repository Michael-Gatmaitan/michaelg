import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";
import { CursorGradient } from "@/components/CursorGradient";
import Nav from "@/components/layout/Nav/Nav";
import FooterSection from "@/components/layout/Footer/FooterSection"
import SideBar from "@/components/layout/Nav/SideBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Michael Gatmaitan | Website Portfolio",
  description:
    "My journey through web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased cursor-gradient bg-[radial-gradient(#dedede_1px,transparent_1px)] dark:bg-[radial-gradient(#202020_1px,transparent_1px)] bg-size-[16px_16px]`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CursorGradient />

          <SideBar />
          <div className="bg-[radial-gradient(circle_at_top,rgba(60,64,198,0.15),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(144,97,249,0.18),transparent_55%)]">
            <main className="mx-auto min-h-screen w-full max-w-4xl px-4 pb-20 sm:px-8 lg:px-0">
              <Nav />
              {children}
              <FooterSection />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
