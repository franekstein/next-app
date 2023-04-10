import { isExternalLink } from '@/utils';
import Link from 'next/link';

type MarkdownLinkProps = React.ComponentProps<typeof Link>;

export const MarkdownLink = (props: MarkdownLinkProps) => {
  const { href: htmlHref, ...rest } = props;
  const href = htmlHref.toString();

  if (isExternalLink(href)) {
    return <a href={href.toString()} rel="noopener noreferrer" {...rest} />;
  }

  return <Link href={href} {...rest} />;
};
