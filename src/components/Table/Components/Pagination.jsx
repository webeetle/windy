import classNames from "classnames";
import React from "react";

const Pagination = ({
  onNext,
  onBack,
  maxPages,
  currentPage,
  totals,
  pageSize,
}) => {
  return (
    <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200 ">
      <div className="flex-1 flex justify-between sm:hidden">
        <div
          onClick={onBack}
          className={classNames(
            { "pointer-events-none opacity-50": currentPage === 0 },
            "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          )}
        >
          Previous
        </div>
        <div
          onClick={onNext}
          className={classNames(
            { "pointer-events-none opacity-50": currentPage === maxPages - 1 },
            "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          )}
        >
          Next
        </div>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{pageSize * currentPage + 1}</span> to{" "}
            <span className="font-medium">
              {pageSize * (currentPage + 2) - 2}
            </span>{" "}
            of
            {"  "}
            <span className="font-medium">{totals}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <div
              onClick={onBack}
              className={classNames(
                { "pointer-events-none opacity-50": currentPage === 0 },
                "relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              )}
            >
              <span className="sr-only">Previous</span>
              <ArrowLeft aria-hidden="true" />
            </div>
            <div
              onClick={onNext}
              className={classNames(
                {
                  "pointer-events-none opacity-50":
                    currentPage === maxPages - 1,
                },
                "relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              )}
            >
              <span className="sr-only">Next</span>
              <ArrowRight aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

const ArrowRight = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

const ArrowLeft = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
};
