import React, { useContext,useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { AppProvider } from "../Content/Api";

function Sorted() {
  const { data, setData } = useContext(AppProvider);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);

    if (event.target.value === 'lowToHigh') {
      hanldeChange();
    } else if (event.target.value === 'highToLow') {
      hanldeChangea();
    }
    else if (event.target.value === 'titleLow') {
      hanldeTitle();
    }
    else if (event.target.value === 'titleHigh') {
      hanldeTitles();
    }
   
  };


  

  const hanldeTitle = () => {
    const updateItem =  [...data].sort((a, b) => a.title.localeCompare(b.title));
   setData(updateItem);  

  };
  const hanldeTitles = () => {
    const updateItem =  [...data].sort((a, b) => b.title.localeCompare(a.title));
    setData(updateItem);  
  };

  const hanldeChange = () => {
    const updateItem = [...data].sort((a, b) => a.price - b.price);
    setData(updateItem);
  };

  const hanldeChangea = () => {
    const updateItem = [...data].sort((a, b) => b.price - a.price);
    setData(updateItem);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem >
            <em>None</em>
          </MenuItem>
          <MenuItem value="lowToHigh">Low to High Price</MenuItem>
          <MenuItem value="highToLow">High to Low Price</MenuItem>
          <MenuItem value="titleLow">Sort Title A to Z</MenuItem>
          <MenuItem value="titleHigh">Sort Title Z to A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sorted;