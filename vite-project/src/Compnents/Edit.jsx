import React, { useEffect, useState,useContext } from 'react';
import { AppProvider } from "../Content/Api";
const Edit = ({ val }) => {
 const [editItem,setEditItem]=useState("")
 const {data,value,setValue,setData}=useContext(AppProvider)

const  handleEdit=(id)=>{
    console.log(id)
    setEditItem(id)
}
const handlesave =()=>{
  const updatedData = data.map((item) =>
  item.id === val.id ? { ...item, title: value } : item
);
setData(updatedData)
setValue(" ")
localStorage.setItem("jsonData",JSON.stringify(updatedData))
}
  return (
    <>
    {
        editItem ? (
            <>
            <input placeholder="title" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button onClick={handlesave}>SaveEdit</button>
            </>
        ):(
            <>
            {val.text}
          <button className="btn btn-primary ms-1" onClick={() => handleEdit(val.id)}>
            Edit
          </button>
            </>
        )
    }
       
    </>
  );
};

export default Edit;