import React from "react";
import { useContext } from "react";
import { AppProvider } from "../Content/Api";

const Input = () => {
  const {
    value,
    setValue,
    price,
    setPrice,
    category,
    setCategory,
    data,
    setData,
  } = useContext(AppProvider);

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
    console.log(updateItem);
    setData(updateItem);
    setValue("");
    setPrice("");
    setCategory("");
    // localStorage.setItem("jsonData", JSON.stringify(updateItem));
    localStorage.setItem("jsonData", JSON.stringify(updateItem));
    alert(`succsessful add New Item`)
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
