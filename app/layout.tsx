import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: "Fatjon Meci | Marketing leader, builder, curious mind", template: "%s | Fatjon Meci" }, description: "Fatjon Meci is a marketing leader and builder based in Frankfurt, with a background spanning growth, data science, AI, teams, chess, physics, football, and learning.", alternates: { canonical: "/" }, openGraph: { title: "Fatjon Meci", description: "Marketing leader, builder, and curious mind exploring growth, AI, chess, physics, football, and better questions.", url: site.url, siteName: "Fatjon Meci", locale: "en_US", type: "website" }, twitter: { card: "summary_large_image", title: "Fatjon Meci", description: "Marketing leader, builder, and curious mind exploring growth, AI, chess, physics, football, and better questions." }, robots: { index: true, follow: true } };
export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><JsonLd /><Link className="skip-link" href="#main">Skip to content</Link><Header /><main id="main">{children}</main><Footer /></body></html>; }
