
import {useContext,useEffect} from "react"
import { AppProvider } from "../Content/Api";

const Error =()=>{
    const {currentPage,setCurrentPage,data}=useContext(AppProvider)
  
        
    return(
        <>
            <p>NO data found</p>
        </>
    )
}

export default Error