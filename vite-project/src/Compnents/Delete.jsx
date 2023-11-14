import React from "react";
import axios from "axios";
import { useContext } from "react";
import { AppProvider } from "../Content/Api";

const Delete = ({val}) => {
    const {data,setData}=useContext(AppProvider)

    const deleteData = async (id) => {
        try {
          await axios.delete(`https://fakestoreapi.com/products/${id}`);
          const updatedData = data.filter((item) => item.id !== id);
          localStorage.setItem("jsonData", JSON.stringify(updatedData));
          setData(updatedData);
          console.log("Record deleted successfully.");
          alert("Record deleted successfully.")
        } catch (error) {
          console.error("Error deleting data:", error.message);
          alert(error.message)
        }
      };
  return (
    <>
      <button className="btn btn-danger" onClick={() => deleteData(val.id)}>
        Delete
      </button>
    </>
  );
};

export default Delete;
