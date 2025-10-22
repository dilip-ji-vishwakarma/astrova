import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const MetaPagination = ({ pagination, onPageChange }) => {
  if (!pagination) return null;

  const { page, totalPages } = pagination;

  const handlePrev = (e) => {
    e.preventDefault();
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (page < totalPages) onPageChange(page + 1);
  };

  const handlePageClick = (e, p) => {
    e.preventDefault();
    onPageChange(p);
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const themeColor = "#E25016";

  return (
    <nav aria-label="Pagination" className="mt-4">
      <ul className="pagination justify-content-center align-items-center gap-2">
        {/* Previous */}
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link border-0 px-3 py-2 rounded-pill shadow-sm fw-semibold"
            onClick={handlePrev}
            style={{
              backgroundColor: "white",
              color: themeColor,
              border: `1px solid ${themeColor}`,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF0EA")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            &#8592; Prev
          </button>
        </li>

        {/* Page numbers */}
        {getPageNumbers().map((p, index) =>
          p === "..." ? (
            <li key={index} className="page-item disabled">
              <span className="page-link border-0 bg-transparent text-secondary fw-bold">
                ...
              </span>
            </li>
          ) : (
            <li key={index} className="page-item">
              <button
                className="page-link border-0 rounded-pill fw-semibold"
                style={{
                  minWidth: "42px",
                  height: "42px",
                  backgroundColor: page === p ? themeColor : "#f8f9fa",
                  color: page === p ? "white" : themeColor,
                  border: `1px solid ${themeColor}`,
                  boxShadow:
                    page === p
                      ? `0 0 10px rgba(226,80,22,0.4)`
                      : "0 0 5px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (page !== p)
                    e.currentTarget.style.backgroundColor = "#FFF0EA";
                }}
                onMouseLeave={(e) => {
                  if (page !== p)
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                }}
                onClick={(e) => handlePageClick(e, p)}
              >
                {p}
              </button>
            </li>
          )
        )}

        {/* Next */}
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link border-0 px-3 py-2 rounded-pill shadow-sm fw-semibold"
            onClick={handleNext}
            style={{
              backgroundColor: "white",
              color: themeColor,
              border: `1px solid ${themeColor}`,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF0EA")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            Next &#8594;
          </button>
        </li>
      </ul>
    </nav>
  );
};
