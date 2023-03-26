import { useRouter } from "next/router";
import { PaginationMobile } from "./PaginationMobile";
import { PaginationNext } from "./PaginationNext";
import { PaginationPrev } from "./PaginationPrev";

export interface PaginationProps {
  hasPrev: boolean;
  hasNext: boolean;
  offset: number;
  take: number;
  currentPage?: number;
  total?: number;
}

export const Pagination = (props: PaginationProps) => {
  const { pathname } = useRouter();
  const { hasNext, hasPrev, currentPage, total, take, offset } = props;
  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div
        className="hidden items-center justify-between sm:flex"
        aria-label="Pagination"
      >
        <PaginationPrev
          href={`${pathname}?offset=${hasPrev ? offset - take : offset}&take=${take}`}
          disabled={!hasPrev}
        />
        <ul className="flex items-center gap-1">
          {total &&
            total > 0 &&
            Array.from(Array(total)).map((item, idx) => (
              <li key={item} className="text-sm">
                {item == "..." ? (
                  <div>{item}</div>
                ) : (
                  <a
                    href="javascript:void(0)"
                    aria-current={currentPage == item ? "page" : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
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
        </ul>
        <PaginationNext
          href={`${pathname}?offset=${hasNext ? offset + take : offset}&take=${take}`}
          disabled={!hasNext}
        />
      </div>
      {/* On mobile version */}
      <PaginationMobile {...props} />
    </div>
  );
};
