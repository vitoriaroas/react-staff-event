import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/staff">Staff</NavLink>
      <NavLink exact to="/events">Events</NavLink>
    </nav>
  )
}
export default Navbar