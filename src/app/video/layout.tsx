import type { Metadata } from "next";

import { Raleway } from "next/font/google";
import "../globals.css";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cecilia Torres",
  description: "Cecilia Torres-Tanatóloga",
  icons: {
    icon: "./images/icon.svg",
    shortcut: "./images/icon.svg",
    apple: "./images/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
