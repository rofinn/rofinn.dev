import type { Metadata } from "next";
import { Providers } from "./providers";
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
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
