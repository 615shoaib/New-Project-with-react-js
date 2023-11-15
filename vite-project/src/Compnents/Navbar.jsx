import React from 'react'
import Sorted from './Sorted'
import Search from './search'


const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFScYwNMn1LN1VgF3sqrZgZZ0Gspv73eITzg&usqp=CAU" alt="Bootstrap" width="40" height="34" />
    </a>
       <Search />
    <Sorted />
  </div>
</nav>

 </>
  )
}

export default Navbar