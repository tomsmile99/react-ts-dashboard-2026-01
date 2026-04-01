import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  siblingCount?: number;
  showPageInfo?: boolean;
  showFirstLast?: boolean;
  showRowsPerPage?: boolean;
  showJumpToPage?: boolean;
  pageSizeOptions?: number[];
  className?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  siblingCount = 1,
  showPageInfo = true,
  showFirstLast = true,
  showRowsPerPage = false,
  showJumpToPage = false,
  pageSizeOptions = [10, 20, 50, 100],
  className = "",
}: PaginationProps) => {
  const [jumpPage, setJumpPage] = useState(String(currentPage));

  useEffect(() => {
    setJumpPage(String(currentPage));
  }, [currentPage]);

  const pageRange = useMemo(() => {
    if (totalPages <= 1) return [];

    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);

      return [...leftRange, "dots", lastPageIndex];
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );

      return [firstPageIndex, "dots", ...rightRange];
    }

    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );

    return [firstPageIndex, "dots", ...middleRange, "dots", lastPageIndex];
  }, [currentPage, siblingCount, totalPages]);

  if (totalPages <= 1) return null;

  const startItem =
    totalItems && pageSize ? (currentPage - 1) * pageSize + 1 : undefined;

  const endItem =
    totalItems && pageSize
      ? Math.min(currentPage * pageSize, totalItems)
      : undefined;

  const handleJump = () => {
    const page = Number(jumpPage);

    if (!Number.isFinite(page)) return;
    if (page < 1 || page > totalPages) return;

    onPageChange(page);
  };

  return (
    <div
      className={`flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between ${className}`}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        {showPageInfo && (
          <p className="text-sm text-slate-600">
            {typeof startItem === "number" &&
            typeof endItem === "number" &&
            typeof totalItems === "number" ? (
              <>
                Showing{" "}
                <span className="font-semibold text-slate-800">{startItem}</span>
                {" - "}
                <span className="font-semibold text-slate-800">{endItem}</span>
                {" of "}
                <span className="font-semibold text-slate-800">{totalItems}</span>
              </>
            ) : (
              <>
                Page{" "}
                <span className="font-semibold text-slate-800">{currentPage}</span>
                {" of "}
                <span className="font-semibold text-slate-800">{totalPages}</span>
              </>
            )}
          </p>
        )}

        {showRowsPerPage && onPageSizeChange && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Rows per page</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="px-3 py-2 text-sm transition bg-white border outline-none cursor-pointer rounded-xl border-slate-200 text-slate-700 focus:border-blue-400"
            >
              {pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end">
        <div className="flex flex-wrap items-center gap-2">
          {showFirstLast && (
            <button
              type="button"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border cursor-pointer rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronsLeft className="w-4 h-4" />
              <span className="hidden sm:inline">First</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border cursor-pointer rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {pageRange.map((item, index) => {
              if (item === "dots") {
                return (
                  <span
                    key={`dots-${index}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-white border cursor-pointer rounded-xl border-slate-200 text-slate-400"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </span>
                );
              }

              const pageNumber = item as number;
              const isActive = pageNumber === currentPage;

              return (
                <button
                  type="button"
                  key={pageNumber}
                  onClick={() => onPageChange(pageNumber)}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-medium transition cursor-pointer ${
                    isActive
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border cursor-pointer rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {showFirstLast && (
            <button
              type="button"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border cursor-pointer rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="hidden sm:inline">Last</span>
              <ChevronsRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {showJumpToPage && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Go to</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleJump();
              }}
              className="w-20 px-3 py-2 text-sm transition bg-white border outline-none cursor-pointer rounded-xl border-slate-200 text-slate-700 focus:border-blue-400"
            />
            <button
              type="button"
              onClick={handleJump}
              className="px-3 py-2 text-sm font-medium transition bg-white border cursor-pointer rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              Go
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;