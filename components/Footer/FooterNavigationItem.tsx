import clsx from "clsx";
import Link from "next/link";

export interface FooterNavigationItemProps {
  href: string;
  title: string;
  active: boolean;
}

export const FooterNavigationItem = ({ href, title, active }: FooterNavigationItemProps) => {
  const classes = clsx("hover:text-gray-800", {
    "font-bold": active,
  });

  return (
    <li className={classes}>
      <Link href={href} className="block">
        {title}
      </Link>
    </li>
  );
};
