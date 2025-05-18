import { ThemeToggle } from "@/components/ThemeToggle";
import { Nav } from "@/components/Nav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative w-full flex-col md:flex-row">
        <Nav />
        <main className="mx-8 flex-auto pb-20 md:pb-4">{children}</main>
        <div className="fixed top-0 right-0">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
