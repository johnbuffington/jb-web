import type { Metadata } from "next";
import { notoSans } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "John Buffington | Software Engineer",
  description: "John Buffington is a Full Stack Engineer from Starkville, MS.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: 'favicon.png',
    apple: 'icon.png',
  },
  manifest: 'site.webmanifest',
  themeColor: '#fafafa'

  // TODO: add OpenGraph props
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        `${notoSans.className} text-xl text-gray-800 bg-emerald-100 text-center`
      }>
        {children}
      </body>
    </html>
  );
}
