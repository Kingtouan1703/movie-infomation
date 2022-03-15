import React from 'react'
import ReactPaginate from 'react-paginate';
export const Pagination = () => {
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
