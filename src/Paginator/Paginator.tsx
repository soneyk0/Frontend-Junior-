import React from 'react';
import s from './Paginator.module.css'

type PaginatorType = {
    totalPages: number
    currentPage: number
    onPageChange: (newPage: number) => void
}

const Paginator = ({totalPages, currentPage, onPageChange}: PaginatorType) => {

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1} className={s.paginationButton}>
                Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className={s.paginationButton}>
                Next
            </button>
        </div>
    );
};

export default Paginator;