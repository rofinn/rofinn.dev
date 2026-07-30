import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const isDev = process.env.NODE_ENV !== "production";

// Cal's embed script runs in our page and manages a third-party iframe. Treat
// it as a narrow trusted dependency: only Cal's script/frame/connect/image
// origins are carved out here, while the rest of the policy stays site-local.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://app.cal.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://app.cal.com https://cal.com",
  "font-src 'self' data: https://cal.com",
  "connect-src 'self' https://app.cal.com https://cal.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-src https://app.cal.com https://cal.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
  // experimental: {
  //   outputFileTracingIncludes: {
  //     "/articles/*": ["./app/articles/**/*.mdx"],
  //     "/cv": ["./app/cv/*.md"],
  //   },
  // },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
