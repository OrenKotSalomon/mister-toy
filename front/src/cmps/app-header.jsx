

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import images from '../assets/img/images.png'

export function AppHeader() {


    return <header className="app-header">
        <Link className="logo" to="/">
            <img src={images} alt="" />
        </Link>
        <nav className="link-container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/toy">toy</NavLink>
            <NavLink to="/dashboard">dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>


    </header>
}
