import { ChevronRightIcon } from "@/icons/ChevronRightIcon";

export interface PaginationNextProps {
  href: string;
  disabled?: boolean;
}

export const PaginationNext = ({
  href,
  disabled = false,
}: PaginationNextProps) => {
  return (
    <li>
      <a
        href={href}
        className="hover:text-indigo-600 hover:bg-gray-50 px-2 py-3 border border-l-0 rounded-tr-lg rounded-br-lg"
      >
        <span className="inline-flex items-center gap-x-2">
          Next
          <ChevronRightIcon />
        </span>
      </a>
    </li>
  );
};
