import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="font-semibold">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </Container>
  );
}
