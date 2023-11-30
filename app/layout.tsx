import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ColorModeScript } from "@chakra-ui/react";

import { Providers } from "./providers";
import theme from "../theme";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Rory Finnegan | Software Developer",
  description:
    "Software Developer with experience building data pipelines and ML platforms",
  openGraph: {
    title: "Rory Finnegan",
    description:
      "Software Developer with experience building data pipelines and ML platforms",
    images: "url/wave.png",
    locale: "en-CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
