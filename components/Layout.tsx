import { Waves } from "@/components/Waves";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed w-full lg:px-8">
        <Waves />
      </div>
      <div className="relative w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
