import { Feed } from "feed";
import { getAllArticles } from "@/lib/content";

export async function GET(req: Request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw Error("Missing NEXT_PUBLIC_SITE_URL environment variable");
  }

  const author = {
    name: "Rory Finnegan",
    email: "contact@rofinn.net",
  };

  const feed = new Feed({
    title: author.name,
    description: "Software spelunker, ex-researcher and outdoor enthusiast",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  const articles = await getAllArticles();

  for (const article of articles) {
    const publicUrl = `${siteUrl}/content/${article.slug}`;
    
    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      description: article.description,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    });
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "s-maxage=31556952",
    },
  });
}