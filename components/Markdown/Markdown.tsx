import { MDXMarkdownContent } from '@/model/product';
import { MDXRemote } from 'next-mdx-remote';
import { Link } from '../Link/Link';

export const Markdown = ({ content }: { content: MDXMarkdownContent }) => {
  return (
    <div className="prose max-w-none">
      <MDXRemote
        components={{
          a: ({ href, ref, ...rest }) => <Link href={href || '#'} {...rest} />,
        }}
        {...content}
      />
    </div>
  );
};
