import { Container } from "@/components/Container";

export function SimpleLayout({
  title,
  intro,
  className,
  children,
}: {
  title: string;
  intro: string;
  className: string;
  children?: React.ReactNode;
}) {
  return (
    <Container
      className={`flex flex-col ${
        className?.includes("justify-center") ? "h-screen" : ""
      } flex-grow items-center mt-8 mb-24 md:mb-8 m-auto ${className}`}
    >
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6">{intro}</p>
      </header>
      {children && (
        <div className="mt-8 sm:mt-12 pb-20 md:pb-4">{children}</div>
      )}
    </Container>
  );
}
