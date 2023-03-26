import { PaginationProps } from "./Pagination";

export const PaginationMobile = ({ currentPage, total}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Previous
        </a>
        <div className="font-medium">
          Page {currentPage} of {total}
        </div>
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
  );
};