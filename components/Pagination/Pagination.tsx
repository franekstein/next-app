import { ChevronLeftIcon } from "@/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/icons/ChevronRightIcon";
import { useState } from "react";
import { PaginationMobile } from "./PaginationMobile";
import { PaginationNext } from "./PaginationNext";
import { PaginationPrev } from "./PaginationPrev";

export interface PaginationProps {
  hasPrev: boolean;
  hasNext: boolean;
  currentPage?: number;
  total?: number;
}

export const Pagination = (props: PaginationProps) => {
  const { hasNext, hasPrev, currentPage, total } = props;
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4 text-gray-600 md:px-8">
      <div className="hidden justify-center sm:flex" aria-label="Pagination">
        <ul className="flex items-center">
          <PaginationPrev href={"/"} disabled={hasPrev} />
          {total &&
            total > 0 &&
            Array.from(Array(total)).map((item, index) => (
              <li key={item} className="">
                {item == "..." ? (
                  <span className="px-4 py-3 border border-l-0">{item}</span>
                ) : (
                  <a
                    href="javascript:void(0)"
                    aria-current={currentPage == item ? "page" : false}
                    className={`px-4 py-3 border border-l-0 duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
                      currentPage == item
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : ""
                    }`}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          <PaginationNext href={"/"} disabled={hasNext} />
        </ul>
      </div>
      {/* On mobile version */}
      <PaginationMobile {...props} />
    </div>
  );
};
