import React from 'react'
import {useState,useEffect}from "react"
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useContext } from 'react';
import { AppProvider } from '../Content/Api';
import Pagination from './Pagination';


const Data = () => {

  const {data,setData,setTotalPages,itemsPerPage}=useContext(AppProvider)
    
      useEffect(()=>{
        
        const getUser = async () => {
          try {
            const storedData = JSON.parse(localStorage.getItem("jsonData"))
        
            if (storedData) {
              setData(storedData);
              setTotalPages(Math.ceil(storedData.length / itemsPerPage));
            } else {
              const response = await axios.get('https://fakestoreapi.com/products');
              const apiData = response.data;
              setTotalPages(Math.ceil(apiData.length / itemsPerPage));
              setData(apiData);
              localStorage.setItem('jsonData', JSON.stringify(apiData));
            }
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
        getUser()
      },[])

    


     

  return (
    
    <>
     <Pagination />
    </>
  )
}

export default Data