

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";


export function AppHeader() {


    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/toy">toy</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>


    </header>
}
