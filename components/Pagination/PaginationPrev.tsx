import { ChevronLeftIcon } from "@/icons/ChevronLeftIcon";

export interface PaginationPrevProps {
  href: string;
  disabled?: boolean;
}

export const PaginationPrev = ({
  href,
  disabled = false,
}: PaginationPrevProps) => {
  return (
  <li>
    <a
      href={href}
      className="hover:text-indigo-600 hover:bg-gray-50 px-2 py-3 border border-r-0 rounded-tl-lg rounded-bl-lg"
    >
      <span className="inline-flex flex-row-reverse items-center gap-x-2">
        Previous
        <ChevronLeftIcon />
      </span>
    </a>
  </li>
)};
