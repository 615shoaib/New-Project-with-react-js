import { useState } from "react"
import { createContext } from "react"
export const AppProvider = createContext(null)




const Api = ({children}) => {
  const [search,setSearch]=useState("")
  const [data,setData]=useState([])

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4;

  return (
   <>
    <AppProvider.Provider value={{
      search,setSearch,
      data,setData,
      currentPage,setCurrentPage,
      totalPages,setTotalPages,
      itemsPerPage,
    }}>
        {children}
    </AppProvider.Provider>
   </>
  )
}

export default Api;
