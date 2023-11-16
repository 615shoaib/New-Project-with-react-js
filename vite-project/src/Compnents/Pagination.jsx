import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./main.css";
import { AppProvider } from "../Content/Api";
import Datainfo from "./Datainfo";

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
  const subset = data.slice(startIndex,endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };



  // if(currentPage === "" || subset.length === 0){
  //   return <h1>no data found</h1>
  // }

  if(currentPage === "" || subset.length === 0){
    return <h1>no data found</h1>
  }
  return (
    <>
      <Datainfo subset={subset} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </>
  );
};

export default Pagination;
