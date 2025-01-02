import "../style/pagination.css"; 

const Pagination = ({ currentPage, totalPages, prevPage, nextPage }) => {
  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
