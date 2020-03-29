import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Footer from "./Footer";
import User from "./User";
import DynNavBar from "../containers/DynNavBar";
import Signal from "./Signals";
import DynLogin from "../containers/DynLogin";

function App() {
    return (
        <div className={"App"}>
            <DynNavBar/>

            <div className={"MainBody"}>
                <Switch>

                    {/*<Route path={"/posts"}>*/}
                    {/*</Route>*/}

                    {/*<Route path={"/discussions"}>*/}
                    {/*</Route>*/}

                    {/*<Route path={"/register"}>*/}
                    {/*    <Register/>*/}
                    {/*</Route>*/}

                    <Route path={"/signals"}>
                        <Signal/>
                    </Route>

                    <Route path={"/login"}>
                        <DynLogin/>
                    </Route>

                    {/*<Route path={"/user"}>*/}
                    {/*    <User/>*/}
                    {/*</Route>*/}

                    {/*<Route path={"/:id"}>*/}
                    {/*</Route>*/}

                    {/*Invalid path redirect to 404*/}
                    <Route path={"/"}>
                        <Redirect to={"/login"}>Re</Redirect>
                        <div>404</div>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
