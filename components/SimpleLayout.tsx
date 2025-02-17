import { Container } from "@/components/Container";

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="flex flex-col h-screen flex-grow mt-8 m-auto">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6">{intro}</p>
      </header>
      {children && <div className="mt-8 sm:mt-12">{children}</div>}
    </Container>
  );
}
