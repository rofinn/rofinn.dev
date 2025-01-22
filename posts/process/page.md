```mdx
import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
  author: 'Rory Finnegan',
  date: '2025-01-22',
  title: "What's wrong with P******?",
  description: 'Why does "process" seem to be a dirty word in software development?',
  format: 'blog'
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => <ArticleLayout article={article} {...props} />
mdx```

# What's wrong with P\*\*\*\*\*\*?
