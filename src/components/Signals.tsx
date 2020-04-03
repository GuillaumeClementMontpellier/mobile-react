import React from "react";
import DynSignList from "../containers/PList/DynSignList";
import DynSignCommList from "../containers/Comment/DynSignCommList";



export default function Signals() {
    return (<div className={"Signals"}>
        <DynSignList/>

        <DynSignCommList/>

    </div>);
}