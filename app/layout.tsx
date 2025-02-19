import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";
import { Waves } from "@/components/Waves";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Rory Finnegan",
    default: "Rory Finnegan - Software Developer",
  },
  description:
    "I'm a software spelunker, retired researcher and outdoor enthusiast.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full m-auto p-2 gap-12 bg-crust text-text latte dark:frappe">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
