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

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  };

    const forcePageValue = totalPages > 0 ? currentPage : 0

    useEffect(() => {
      setCurrentPage(0);
    }, [data]);

    
    
  if (currentPage === "" || subset.length === 0) {
    return <Error />;
  }

  return (
    <>
      <Datainfo subset={subset} />

      <div style={{ display: "flex", justifyContent: "center" }}>
       {
        totalPages > 0 && 
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
       }
      </div>
    </>
  );
};

export default Pagination;
