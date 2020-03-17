import React from 'react';
import NavBar from './NavBar';
import {Redirect, Route, Switch} from "react-router";
import Home from "./Home";
import Posts from "./Posts";
import Footer from "./Footer";

function App() {
    return (
        <div className={"App"}>
            <NavBar/>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route path={"/posts"}>
                    <Posts/>
                </Route>
                <Route path={"/"}>
                    <Redirect to={"/"}/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
