import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ProductEntity {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
}

export type MDXMarkdownContent = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, unknown>
>;

export interface ProductDescriptionMarkdown {
  longDescription: MDXMarkdownContent;
}
