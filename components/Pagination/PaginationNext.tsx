import { ChevronRightIcon } from "@/icons/ChevronRightIcon";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "../Button/Button";

export interface PaginationNextProps {
  href: string;
  onClick?: VoidFunction;
  disabled?: boolean;
}

export const PaginationNext = ({
  href,
  onClick,
  disabled = false,
}: PaginationNextProps) => {
  const buttonClasses = clsx(
    "hover:text-indigo-600 flex items-center gap-x-2",
    { "cursor-not-allowed hover:text-current pointer-events-none opacity-25": disabled }
  );
  return (
    <Link onClick={onClick} href={href} className={buttonClasses}>
      Next
      <ChevronRightIcon />
    </Link>
  );
};
