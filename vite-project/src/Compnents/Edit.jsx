import React, { useEffect, useState } from 'react';

const Edit = ({ val }) => {
 const [editItem,setEditItem]=useState("")

const  handleEdit=(id)=>{
    console.log(id)
}
  return (
    <>
    {
        editItem ? (
            <>
            <input placeholder="title" value="editItem" onChange={()=>setEditItem(e.target.value)} />
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