import { type Metadata } from "next";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { type ArticleWithSlug, getAllArticles } from "@/lib/content";
import { Waves } from "@/components/Waves";
import { formatDate } from "@/lib/formatDate";

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/content/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All of my long-form thoughts and presentations on programming, research, and more, collected in chronological order.",
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <div className="content">
      <Waves />
      <SimpleLayout
        title="NB."
        intro="A list of posts, presentations and articles related to software development and research."
        className=""
      >
        <div className="md:pl-6">
          <div className="flex flex-col">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </div>
  );
}
