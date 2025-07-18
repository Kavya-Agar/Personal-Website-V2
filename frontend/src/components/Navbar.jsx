import React from "react";
import {Link} from "react-router-dom"
import Logo from '../assets/react.svg'


export const Navbar = () => {
    return (
        <nav className="navbar fixed top-0 left-0 w-full z-5">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} className="logo-button"/>
                </Link>
            </div>

        </nav>
    )
} 