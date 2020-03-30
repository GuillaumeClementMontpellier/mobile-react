import React from "react";
import {NavLink} from "react-router-dom";
import Button from "./Utils/Button";

export interface NavBarProps {
    active: Boolean
    admin: Boolean
    logoutCallback: () => void
}

export default function NavBar({active,admin, logoutCallback}: NavBarProps) {

    let AdminInfo = () => {
        if (admin){
            return (<span>
                <NavLink to={'/signals'} activeClassName={"NavButtonActive"} className={"NavButton"}>Signalements</NavLink>
            </span>)
        } else {
            return (<span/>)
        }
    }

    let UserInfo = () => {
        if (!active) {
            return (<span>
                <NavLink to={'/register'} activeClassName={"NavButtonActive"} className={"NavButton"}>Register</NavLink>
                <NavLink to={'/login'} activeClassName={"NavButtonActive"} className={"NavButton"}>Login</NavLink>
            </span>)
        } else {
            return (<span>
                {/*<NavLink to={'/user'} activeClassName={"NavButtonActive"} className={"NavButton"}>User</NavLink>*/}
                <Button onClick={logoutCallback} active={true} className={"link-button"}>LogOut</Button>
            </span>)
        }
    };

    return (
        <div className={"NavBar"}>
            {/*<NavLink to={'/home'} activeClassName={"NavButtonActive"} className={"NavButton"}>Home</NavLink>*/}
            {/*<NavLink to={'/posts'} activeClassName={"NavButtonActive"} className={"NavButton"}>Posts</NavLink>*/}
            {/*<NavLink to={'/discussions'} activeClassName={"NavButtonActive"} className={"NavButton"}>Discussions</NavLink>*/}

            <AdminInfo/>

            <UserInfo/>
        </div>
    );
}