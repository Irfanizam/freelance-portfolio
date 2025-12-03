import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Irfan - Freelance Software Developer | Assignment & Project Solutions",
  description: "Professional software development services. Specializing in C++, web development, and academic assignments. Get your projects done on time with quality code.",
  keywords: "freelance developer, C++ programming, software development, assignment help, project solutions, web development, Malaysia",
  openGraph: {
    title: "Muhammad Irfan - Freelance Software Developer",
    description: "Professional software development services. Get your projects done on time with quality code.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Irfan - Freelance Software Developer",
    description: "Professional software development services. Get your projects done on time with quality code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}






