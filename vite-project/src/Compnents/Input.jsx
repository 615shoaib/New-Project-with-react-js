import React from "react";
import { useContext,useEffect,useState } from "react";
import { AppProvider } from "../Content/Api";

const Input = () => {
  const {
    data,
    setData,
    setCurrentPage,
    itemsPerPage,
    totalPages,
  } = useContext(AppProvider);

  
  const [value,setValue]=useState( "")
  const [price,setPrice]=useState("")
  const [category,setCategory]=useState("")



  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("jsonData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);


  const createItem = () => {
    if(!value || !price || !category){
        return alert(`please check your information`);
    }
    const updateObj = {
      id: data.length + 1,
      title: value,
      price: price,
      category: category,
    };
    const updateItem = [...data, updateObj];
    setData(updateItem);

  const totalPagesAfterAddition = Math.ceil(updateItem.length / itemsPerPage );
  if (totalPagesAfterAddition !== totalPages) {
    console.log(totalPagesAfterAddition )
    setCurrentPage(totalPagesAfterAddition -1);
  }
  

    setValue("");
    setPrice("");
    setCategory("");
    localStorage.setItem("jsonData", JSON.stringify(updateItem));
  };
  return (
    <div
      className="pt-3 mb-3"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <input
        placeholder="title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{border:"1px solid #ccc",padding:"0 3px"}}
        required
      />
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{border:"1px solid #ccc",padding:"0 3px",marginLeft:"10px"}}
        required
      />
      <input
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{border:"1px solid #ccc",padding:"0 3px",marginLeft:"10px"}}
        required
      />

      <button className="btn btn-secondary" onClick={createItem} style={{marginLeft:"10px"}}>
        Click
      </button>
    </div>
  );
};

export default Input;
