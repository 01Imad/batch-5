import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="NavBar">
            <NavLink
                className="padding-10px"
                activeClassName="red"
                to="/login"
            >Login</NavLink>
            <NavLink
                className="padding-10px"
                activeClassName="red"
                to="/about"
            >About</NavLink>
            <NavLink
                className="padding-10px"
                activeClassName="red"
                to="/sidebar"
            >Sidebar</NavLink>
        </div>
    )
}

export default Navbar;