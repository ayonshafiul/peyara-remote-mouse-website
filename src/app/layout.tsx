import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peyara Remote Desktop Client",
  description: "Control your desktop mouse from your mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="oLCr8VPTgZN1qiVRA2tA_Vfj2MAnr9hR79DQpfdJ1_o"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
