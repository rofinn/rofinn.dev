import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Rory Finnegan",
    default: "Rory Finnegan - Software Developer",
  },
  description:
    "I'm a software spelunker, retired researcher and outdoor enthusiast.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "apple-touch-icon", url: "/apple-icon.png" },
      { rel: "icon", url: "/icon.png" },
    ],
  },
  appleWebApp: {
    title: "Rory Finnegan",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: ["/apple-icon.png"],
  },
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="flex h-full m-auto p-2 pb-20 md:pb-2 gap-12 bg-crust text-text latte dark:frappe">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
