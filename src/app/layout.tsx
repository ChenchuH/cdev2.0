import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chenchu.Dev",
  icons: {
    icon: [
      {
        url: "/Favicon_DarkMode.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Favicon_LightMode.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  description:
    "Chenchu Yakasiri's personal website and portfolio. Learn about my projects, blog posts, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-neutral-950`}
      >
        <div className="relative isolate flex grow flex-col">
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-[url('/ocean-sunset.jpg')] bg-cover bg-[position:center_45%] bg-no-repeat"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-black/50"
          />

          <div className="relative z-10 flex grow flex-col">
            <Header />
            <main className="grow">{children}</main>
          </div>
        </div>

        <div className="relative z-10 bg-neutral-950/90">
          <Footer />
        </div>
      </body>
    </html>
  );
}