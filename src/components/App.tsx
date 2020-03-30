import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Footer from "./Footer";
import DynNavBar from "../containers/DynNavBar";
import Signal from "./Signals";
import DynLogin from "../containers/DynLogin";
import DynError from "../containers/DynError";
import DynRegister from "../containers/DynRegister";
import DynMessage from "../containers/DynMessage";

export interface AppProps {
    logged: Boolean
    admin: boolean
}

function App({logged, admin}: AppProps) {

    const adminRoute = admin ? (<div>
            <Route path={"/signals"}>
                <Signal/>
            </Route>
        </div>
    ) : null;

    const logRoute = logged ? (<div>{adminRoute}</div>) : (
        <div>
            <Route path={"/register"}>
                <DynRegister/>
            </Route>

            <Route path={"/login"}>
                <DynLogin/>
            </Route>
        </div>
    );

    return (
        <div className={"App"}>

            <DynNavBar/>

            <DynError/>

            <DynMessage/>

            <div className={"MainBody"}>
                <Switch>

                    {/*<Route path={"/posts"}>*/}
                    {/*</Route>*/}

                    {/*<Route path={"/discussions"}>*/}
                    {/*</Route>*/}

                    {logRoute}

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
