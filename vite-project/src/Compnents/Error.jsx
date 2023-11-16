
import {useContext,useEffect} from "react"
import { AppProvider } from "../Content/Api";

const Error =()=>{
    const {currentPage,setCurrentPage,data}=useContext(AppProvider)
  
     if(data.length > 0){
        setCurrentPage(0)
     }else {
        return <p>no record was Found</p>
     }   
    return(
        <>
      
       </>
    )
}

export default Error