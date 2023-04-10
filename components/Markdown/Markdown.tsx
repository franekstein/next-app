import { MDXMarkdownContent } from '@/model/product';
import { MDXRemote } from 'next-mdx-remote';
import { MarkdownLink } from '../MarkdownLink/MarkdownLink';

export const Markdown = ({ content }: { content: MDXMarkdownContent }) => {
  return (
    <div className="prose max-w-none">
      <MDXRemote
        components={{
          a: ({ href, ref, ...rest }) => (
            <MarkdownLink href={href || '#'} {...rest} />
          ),
        }}
        {...content}
      />
    </div>
  );
};
