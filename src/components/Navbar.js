import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li"><a href="#" className="navbar-a"> Home </a></li>
                <li className="navbar-li"><a href="#" className="navbar-a"> About </a></li>
                <li className="navbar-li"><a href="#" className="navbar-a"> Support </a></li>
            </ul>
        </nav>
    )
}

export default Navbar;