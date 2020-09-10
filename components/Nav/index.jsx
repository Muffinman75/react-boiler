import React from "react";
import { NavLink } from "react-router-dom";
import { hot } from "react-hot-loader";

function Nav() {

    return (
        <nav className="navbar-container">
            <ul>
                <NavLink to="/" className="nav-link">
                    <li>
                        Login
                    </li>
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    <li>
                        About
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
}
export default hot(module)(Nav);