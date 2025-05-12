import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="text-xl lg:text-5xl py-8 lg:py-16" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-lg lg:text-3xl py-6 lg:py-12" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-md lg:text-2xl py-4 lg:py-8" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-sm lg:text-md py-2 lg:py-4" {...props}>
        {children}
      </p>
    ),
    ...components,
  };
}
