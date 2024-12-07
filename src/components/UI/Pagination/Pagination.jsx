import { t } from "i18next";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  totalPages,
}) => {
  //   const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Helper function to create dynamic page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Adjust how many pages to show
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination flex items-center justify-end gap-2 mt-4">
      <button
        className="px-3 py-2 text-linear font-medium  gap-2 flex items-center   text-lg disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <span>
          <IoIosArrowBack className="text-purple w-4 h-4 ltr:rotate-0 rtl:rotate-180" />
        </span>
       {t("Previous")}
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`px-3 py-2 rounded-md ${
            page === currentPage ? "bg-linear_1 text-white" : "text-linear"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="px-3 py-2 text-linear font-medium  gap-2 flex items-center   text-lg disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {t("Next")}
        <span>
          <IoIosArrowForward className="text-purple w-4 h-4 ltr:rotate-0 rtl:rotate-180" />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
