```mdx
import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
  authors: 'Rory Finnegan and Suzanna Becker',
  date: '2015-11-05',
  title: "Neurogenesis Paradox",
  description: "Neurogenesis paradoxically decreases both pattern separation and memory interference",
  format: 'article'
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => <ArticleLayout article={article} {...props} />
mdx```

# Neurogenesis Paradox

## Neurogenesis paradoxically decreases both pattern separation and memory interference (abstract)

The hippocampus has been the focus of memory research for decades.
While the functional role of this structure is not fully understood, it is widely recognized as being vital for rapid yet accurate encoding and retrieval of associative memories.
Since the discovery of adult hippocampal neurogenesis in the dentate gyrus by Altman and Das in the 1960's, many theories and models have been put forward to explain the functional role it plays in learning and memory.
These models postulate different ways in which new neurons are introduced into the dentate gyrus and their functional importance for learning and memory.
Few if any previous models have incorporated the unique properties of young adult-born dentate granule cells and the developmental trajectory.
In this paper, we propose a novel computational model of the dentate gyrus that incorporates the developmental trajectory of the adult-born dentate granule cells, including changes in synaptic plasticity, connectivity, excitability and lateral inhibition, using a modified version of the Restricted Boltzmann machine.
Our results show superior performance on memory reconstruction tasks for both recent and distally learned items, when the unique characteristics of young dentate granule cells are taken into account.
Even though the hyperexcitability of the young neurons generates more overlapping neural codes, reducing pattern separation, the unique properties of the young neurons nonetheless contribute to reducing retroactive and proactive interference, at both short and long time scales.
The sparse connectivity is particularly important for generating distinct memory traces for highly overlapping patterns that are learned within the same context.

[Download](https://www.frontiersin.org/journals/systems-neuroscience/articles/10.3389/fnsys.2015.00136/pdf)
