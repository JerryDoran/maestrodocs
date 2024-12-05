import { docs, meta, article as articlePosts } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});

export const article = loader({
  baseUrl: '/articles',
  source: createMDXSource(articlePosts, []),
});
