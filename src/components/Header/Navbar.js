import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/staff">Staff</NavLink>
      <NavLink exact to="/events">Events</NavLink>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  )
}
export default Navbar