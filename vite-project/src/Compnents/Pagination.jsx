import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./main.css";
import { AppProvider } from "../Content/Api";
import Datainfo from "./Datainfo";
import Error from "./Error";
const Pagination = () => {
  const {
    data,
    setData,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useContext(AppProvider);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  if (currentPage === "" || subset.length === 0) {
    return <Error />;
  }

  return (
    <>
      <Datainfo subset={subset} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPaginate
          breakLabel="..."
          pageCount={totalPages}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName="pagination"
          renderOnZeroPageCount={null}
          activeClassName="active"
        />
      </div>
    </>
  );
};

export default Pagination;
