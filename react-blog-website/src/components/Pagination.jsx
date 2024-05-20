// Pagination.jsx
// import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange, currentPage, blogs, pageSize, selectedCategory }) => {
  // Kategoriye göre filtrelenmiş blogları al
  const filteredBlogs = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory) : blogs;

  // Filtrelenmiş blog sayısına göre totalPages hesaplanması
  const totalPages = Math.ceil(filteredBlogs.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => (i + 1)).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activerPagination" : ""}
          key={pageNumber}
        >
          <button onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        </li>
      )
    );
  };
  
  return (
    <ul className="pagination my-8 flex-warp gap-6">
      <li>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Önceki</button>
      </li>
      <div className="flex gap-1">{renderPaginationLinks()}</div>
      <li>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Sonraki</button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  blogs: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string // Eğer kategori seçimi yapılıyorsa string olarak beklenir
};

export default Pagination;
