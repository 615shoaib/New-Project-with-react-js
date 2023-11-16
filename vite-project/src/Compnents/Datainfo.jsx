import React from "react";
import axios from "axios";
import { AppProvider } from "../Content/Api";
import { useContext } from "react";
import Delete from "./Delete";
import Input from "./Input";
import Edit from "./Edit"
import Error from "./Error"

const Datainfo = ({ subset }) => {
  const { data, setData, search } = useContext(AppProvider);



  return (
    <>
    <Input/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(subset) && subset.length > 0 ?
            subset
              .filter((val) => {
                if (val.title === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => (
                <>
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td scope="row">{val.title.slice(0, 20)}</td>
                    <td>{val.price}</td>
                    <td>{val.category}</td>
                    <td>
                     <Delete val={val} />
                     <Edit  val={val}/>
                    </td>
                  </tr>
                </>
              ))
              :
              <Error />
              }
        </tbody>
      </table>
    </>
  );
};

export default Datainfo;
