import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar_component'>
      <h1 className="navbarLogo"><a href='https://jasonrlh95.github.io/all_projects/' target='_blank'>MyStudents</a></h1>
      <Link to={"/"}><button>List</button></Link>
      <Link to={"/add"}><button>Add</button></Link>
    </div>
  )
}
