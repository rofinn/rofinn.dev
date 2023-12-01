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
    // Chakra adds style={{colorScheme: "light"}} data-theme="light" attributes causing
    // hydration warnings about the client side attributes not matching what was sent from the server.
    // I don't think there's a better work around as we won't know the color mode preference till it gets client-side.
    // Similarly class="chakra-ui-light" (or dark) is being added to the body.
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
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
