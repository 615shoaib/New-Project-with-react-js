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
    search,
  } = useContext(AppProvider);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);


  const filterItem =  data.filter((val) => {
    if (val.title === '') {
      return val;
    } else if (
      val.title.toLowerCase().includes(search.toLowerCase()) ||
      val.category.toLowerCase().includes(search.toLowerCase())
    ) {
      return val;
    }
  })
  .slice(startIndex, endIndex);



  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  };

  const forcePageValue = Math.min(currentPage,totalPages)

 
  if (currentPage === "" || filterItem.length === 0) {
    return (
    <>
    <p>no data found</p>
      <Error/>
    </>)
 }

  return (
    <>
      <Datainfo filterItem={filterItem} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPaginate
          breakLabel="..."
          pageCount={totalPages}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          // forcePage={currentPage}
          forcePage={forcePageValue}
          containerClassName="pagination"
          renderOnZeroPageCount={null}
          activeClassName="active"
        />
      </div>
    </>
  );
};

export default Pagination;
