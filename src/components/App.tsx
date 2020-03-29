import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Footer from "./Footer";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import User from "./User";
import DynNavBar from "../containers/DynNavBar";

function App() {
    return (
        <div className={"App"}>
            <DynNavBar/>

            <div className={"MainBody"}>
                <Switch>

                    <Route path={"/posts"}>
                    </Route>

                    <Route path={"/discussions"}>
                    </Route>

                    <Route path={"/register"}>
                        <Register/>
                    </Route>

                    <Route path={"/login"}>
                        <Login/>
                    </Route>

                    <Route path={"/user"}>
                        <User/>
                    </Route>

                    <Route path={"/:id"}>
                    </Route>

                    {/*Invalid path redirect to 404*/}
                    <Route path={"/"}>
                        <div>404</div>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
