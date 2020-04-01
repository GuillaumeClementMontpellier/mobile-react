import React from 'react';
import {Route, Switch} from "react-router";
import Footer from "./Footer";
import DynNavBar from "../containers/DynNavBar";

import DynLogin from "../containers/Form/DynLogin";
import DynError from "../containers/Message/DynError";
import DynRegister from "../containers/Form/DynRegister";
import DynMessage from "../containers/Message/DynMessage";
import DynPostList from "../containers/PList/DynPostList";
import DynPost from "../containers/DynPost";
import DynSignList from "../containers/PList/DynSignList";

export interface AppProps {
    logged: Boolean
    admin: boolean
}

function App({logged, admin}: AppProps) {

    return (
        <div className={"App"}>

            <DynNavBar/>

            <DynError/>

            <DynMessage/>

            <div className={"MainBody"}>
                <Switch>

                    {admin ?
                        <Route path={"/signals"}>
                            <DynSignList/>
                        </Route> : null}

                    {logged ? null :
                        <Route path={"/register"}>
                            <DynRegister/>
                        </Route>
                    }

                    {logged ? null :
                        <Route path={"/login"}>
                            <DynLogin/>
                        </Route>
                    }
                    <Route path={"/posts"}>
                        <DynPostList/>
                    </Route>

                    <Route path={"/post/:id"}>
                        <DynPost/>
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
