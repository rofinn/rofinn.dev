import { ThemeToggle } from "@/components/ThemeToggle";
import { Nav } from "@/components/Nav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative w-full flex-col md:flex-row">
        {/* <Header /> */}
        <Nav />
        <main className="mx-8 flex-auto">{children}</main>
        <div className="fixed top-0 right-0">
          <ThemeToggle />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
