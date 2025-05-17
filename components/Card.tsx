import Link from "next/link";
import clsx from "clsx";
import { type ReactNode } from "react";

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CardProps = {
  as?: React.ElementType;
  className?: string;
  children?: ReactNode;
  title?: ReactNode;
  titleHref?: string;
  titleAs?: React.ElementType;
  description?: ReactNode;
  eyebrow?: ReactNode;
  eyebrowAs?: React.ElementType;
  eyebrowDecorate?: boolean;
  cta?: ReactNode;
};

export function Card({
  as: Component = "div",
  className,
  children,
  title,
  titleHref,
  titleAs = "h2",
  description,
  eyebrow,
  eyebrowAs = "p",
  eyebrowDecorate = false,
  cta,
}: CardProps) {
  const TitleComponent = titleAs;
  const EyebrowComponent = eyebrowAs;

  return (
    <Component
      className={clsx(
        className,
        "group relative flex flex-col items-start m-12"
      )}
    >
      {/* Render eyebrow if provided */}
      {eyebrow && (
        <EyebrowComponent
          className={clsx(
            "relative z-10 order-first mb-3 flex items-center text-sm",
            eyebrowDecorate && "pl-3.5"
          )}
        >
          {eyebrowDecorate && (
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            </span>
          )}
          {eyebrow}
        </EyebrowComponent>
      )}

      {/* Render title if provided */}
      {title && (
        <TitleComponent className="font-semibold tracking-tight">
          {titleHref ? (
            <>
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
              <Link href={titleHref}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{title}</span>
              </Link>
            </>
          ) : (
            title
          )}
        </TitleComponent>
      )}

      {/* Render description if provided */}
      {description && (
        <p className="relative z-10 mt-2 text-sm">{description}</p>
      )}

      {/* Render CTA if provided */}
      {cta && (
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium"
        >
          {cta}
          <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
        </div>
      )}

      {children}
    </Component>
  );
}

// Keep the original composable API for backward compatibility
Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle<T extends React.ElementType = "h2">({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "href"> & {
  as?: T;
  href?: string;
}) {
  let Component = as ?? "h2";

  return (
    <Component className="font-semibold tracking-tight">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="relative z-10 mt-2 text-sm">{children}</p>;
};

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = "p">({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "decorate"> & {
  as?: T;
  decorate?: boolean;
}) {
  let Component = as ?? "p";

  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm",
        decorate && "pl-3.5"
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};