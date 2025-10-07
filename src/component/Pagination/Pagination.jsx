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

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mt-4">
        {/* Previous */}
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button className="page-link px-3" onClick={handlePrev}>
            &#8592; Prev
          </button>
        </li>

        {/* Page numbers */}
        {getPageNumbers().map((p, index) =>
          p === "..." ? (
            <li key={index} className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          ) : (
            <li
              key={index}
              className={`page-item ${page === p ? "active" : ""}`}
              style={{ borderRadius: "50%", margin: "0 4px" }}
            >
              <button
                className={`page-link text-center`}
                style={{
                  width: "40px",
                  height: "40px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: page === p ? "#0d6efd" : "white",
                  color: page === p ? "white" : "#0d6efd",
                  border: "1px solid #0d6efd",
                  fontWeight: "bold",
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
          <button className="page-link px-3" onClick={handleNext}>
            Next &#8594;
          </button>
        </li>
      </ul>
    </nav>
  );
};
