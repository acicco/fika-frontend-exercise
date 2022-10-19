import "../styles/components/pagination.css";

const Pagination = ({ page, totalPages, setPage }) => {
    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className="pagination">
            <button
                className="pagination-button"
                onClick={() => handlePageChange(page - 1)}
                disabled={page <= 1}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <span className="pagination-page">
                Page {page} of {totalPages}
            </span>
            <button
                className="pagination-button"
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= totalPages}
            >
                <i className="fas fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Pagination;
