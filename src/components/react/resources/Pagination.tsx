import { useEffect, useState } from "react";
import { aggregate, type AggregationOptions } from "@directus/sdk";
import directus from "../../../../lib/directus"; // Ensure correct import path
import type { Filters } from "./ResourcesTabs";
import type { Schema } from "astro:schema";

type Props = {
  limit: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  filters: Filters;
  category: string;
};

const Pagination = ({
  limit,
  currentPage,
  setCurrentPage,
  filters,
  category,
}: Props) => {
  const [totalPostCount, setTotalPostCount] = useState(0);
  const totalPages = Math.ceil(totalPostCount / limit);

  useEffect(() => {
    const getTotalPostCount = async () => {
      try {
        let filterObj: any = { category: { _eq: category } };

        if (filters.postType && filters.postType !== "all") {
          filterObj.post_type = { _eq: filters.postType };
        }
        if (filters.location && filters.location !== "all") {
          filterObj.location = { _eq: filters.location };
        }
        if (filters.interest && filters.interest !== "all") {
          filterObj.interest = { _eq: filters.interest };
        }

        const query = {
          aggregate: { count: "*" },
          filter: filterObj,
        };

        console.log("query", query);

        const url = `https://cms.ionkol.com/items/articles?aggregate[count]=*&filter=${encodeURIComponent(JSON.stringify(query.filter))}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const count = data.data[0].count;

        setTotalPostCount(Number(count));
      } catch (error) {
        console.error("Error fetching post count:", error);
      }
    };

    getTotalPostCount();
  }, [filters, category]);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Number of pages to show before using ellipsis

    if (totalPages <= maxVisiblePages) {
      // If total pages is less than max visible, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      if (currentPage <= 3) {
        // If current page is near the start
        for (let i = 2; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // If current page is near the end
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // If current page is in the middle
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  if (totalPostCount === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3 mt-8 font-medium">
      {/* Previous button */}
      <button
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          flex items-center px-3 py-2 rounded-full transition-colors duration-200
          ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-[#FF8B98] hover:text-[#EE7380] hover:bg-[#FFF5F6]"
          }
        `}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-2">
        {pageNumbers.map((number, index) => (
          <div key={index}>
            {number === "..." ? (
              <span className="px-2 text-gray-400">...</span>
            ) : (
              <button
                onClick={() =>
                  typeof number === "number" && setCurrentPage(number)
                }
                className={`
                  min-w-[32px] h-8 flex items-center justify-center rounded-full
                  transition-colors duration-200 text-sm
                  ${
                    currentPage === number
                      ? "bg-[#EE7380] text-white"
                      : "text-[#333] hover:bg-[#FFF5F6] hover:text-[#EE7380]"
                  }
                `}
              >
                {number}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() =>
          currentPage < totalPages && setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`
          flex items-center px-3 py-2 rounded-full transition-colors duration-200
          ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-[#FF8B98] hover:text-[#EE7380] hover:bg-[#FFF5F6]"
          }
        `}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
