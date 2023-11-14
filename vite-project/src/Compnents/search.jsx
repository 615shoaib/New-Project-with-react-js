import React, { useContext } from 'react'
import { AppProvider } from '../Content/Api'


const Search = () => {
    const {search,setSearch}=useContext(AppProvider)

    
    const hanldeChange=(e)=>{
        setSearch(e.target.value.toLowerCase())

    }
    return (
    <div>
        <form className="d-flex" role="search">
        <input
          className="form-control me-2 h-100 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
        onChange={(e)=>hanldeChange(e)} 
        />
        
      </form>
    </div>
  )
}

export default Search