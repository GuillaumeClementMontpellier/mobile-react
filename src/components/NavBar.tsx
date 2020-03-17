import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (<div className={"NavBar"}>
        <NavLink to={'/'} activeClassName={"NavButtonActive"} className={"NavButton"}>Home</NavLink>
        <NavLink to={'/posts'} activeClassName={"NavButtonActive"} className={"NavButton"}>Posts</NavLink>
    </div>);
}