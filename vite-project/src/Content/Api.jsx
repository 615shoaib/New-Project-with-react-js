import { useState } from "react"
import { createContext } from "react"
export const AppProvider = createContext(null)




const Api = ({children}) => {
  const [search,setSearch]=useState("")
  const [data,setData]=useState([])

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4;


  const [value,setValue]=useState("")
  const [price,setPrice]=useState("")
  const [category,setCategory]=useState("")
  return (
   <>
    <AppProvider.Provider value={{
      search,setSearch,
      data,setData,
      currentPage,setCurrentPage,
      totalPages,setTotalPages,
      itemsPerPage,
      value,setValue,
      price,setPrice,
      category,setCategory,
    }}>
        {children}
    </AppProvider.Provider>
   </>
  )
}

export default Api;
