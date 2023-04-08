import { isExternalLink } from '@/utils';
import { default as NextLink } from 'next/link';

type NextLinkProps = React.ComponentProps<typeof NextLink>;

export const Link = (props: NextLinkProps) => {
  const { href: htmlHref, ...rest } = props;
  const href = htmlHref.toString();

  if (isExternalLink(href)) {
    return <a href={href.toString()} rel="noopener noreferrer" {...rest} />;
  }

  return <NextLink href={href} {...rest} />;
};
