import React from "react";

export interface Field {
    name: string
    type: string
}

export interface FormProps {
    fields: Field[]
    name: string
    submitName: string
    callback: (data: any) => void
}

export default function ({fields, name, submitName, callback, className}: FormProps & { className: string }) {
    return (<form onSubmit={e => {
            e.preventDefault();
            callback(e.target);
            return false;
        }} className={"form"}>
            <h1>{name}</h1>
            {fields.map(t => <div key={t.name} className={"form-div"}>{t.name}<input type={t.type} name={t.name}
                                                                          className={"form-input form-input-" + t.type}/></div>)}
            <input type={"submit"} value={submitName} className={"form-submit form-" + submitName}/>
        </form>
    );
}