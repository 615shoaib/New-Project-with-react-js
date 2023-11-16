import React, { useState, useContext } from "react";
import { AppProvider } from "../Content/Api";

const Edit = ({ val }) => {
  const [editItem, setEditItem] = useState(null);
  const { data, setData } = useContext(AppProvider);
  const [title, setTitle] = useState(val.title || "");
  const [price, setPrice] = useState(val.price || "");
  const [category, setCategory] = useState(val.category || "");

  const handleEdit = (id) => {
    setEditItem(id);
  };

  const handlesave = () => {
    const updatedData = data.map((item) =>
      item.id === val.id ? { ...item, title, category, price } : item
    );
    setData(updatedData);
    setEditItem(null);
    localStorage.setItem("jsonData", JSON.stringify(updatedData));
  };

  const cancelEdit = () => {
    setEditItem(null);
    setTitle(val.title || "");
    setPrice(val.price || "");
    setCategory(val.category || "");
  };

  return (
    <>
      {editItem ? (
        <>
          <div>
            <input
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-1 border-black"
              style={{ border: "1px solid #ccc" }}
            />
            <input
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-1 border-black"
              style={{ border: "1px solid #ccc" }}
            />
            <input
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-1 border-black"
              style={{ border: "1px solid #ccc" }}
            />
            <button onClick={handlesave} className="btn btn-primary">
              SaveEdit
            </button>
            <button onClick={cancelEdit} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {val.text}
          <button
            className="btn btn-primary ms-1"
            onClick={() => handleEdit(val.id)}
          >
            Edit
          </button>
        </>
      )}
    </>
  );
};

export default Edit;