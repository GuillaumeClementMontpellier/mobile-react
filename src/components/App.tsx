import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Footer from "./Footer";
import DynNavBar from "../containers/DynNavBar";

import DynLogin from "../containers/Form/DynLogin";
import DynError from "../containers/Message/DynError";
import DynRegister from "../containers/Form/DynRegister";
import DynMessage from "../containers/Message/DynMessage";
import DynPostList from "../containers/PList/DynPostList";
import DynPost from "../containers/Post/DynPost";
import DynCreatePost from "../containers/Post/DynCreatePost";
import Signals from "./Signals";

export interface AppProps {
    admin: boolean
}

function App({admin}: AppProps) {

    return (
        <div className={"App"}>

            <DynNavBar/>

            <DynError/>

            <DynMessage/>

            <div className={"MainBody"}>
                <Switch>

                    {admin ?
                        <Route path={"/signals"}>
                            <Signals/>
                        </Route> : null}

                    <Route path={"/register"}>
                        <DynRegister/>
                    </Route>

                    <Route path={"/login"}>
                        <DynLogin/>
                    </Route>


                    <Route path={"/posts"}>
                        <DynPostList/>
                    </Route>

                    <Route path={"/post/:id"}>
                        <DynPost/>
                    </Route>

                    <Route path={"/create/post"}>
                        <DynCreatePost/>
                    </Route>

                    {/*Invalid path redirect to 404*/}
                    <Route path={"/"}>
                        <Redirect to={"/posts"}/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
