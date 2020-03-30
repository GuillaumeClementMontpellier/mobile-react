import React from "react";
import {Message} from "../../state/UI";
import CSS from 'csstype';

interface MessageProps {
    active: Boolean
    message?: Message
    dismiss: () => void
}

export default function ({active, message, dismiss, className}: MessageProps & { className?: string }) {
    const st: CSS.Properties = {
        backgroundColor: message?.color
    };
    return active ? (<div className={className} style={st}>
        <p className={"message-value"}>{message?.message}</p>
        <button className={"message-button"} onClick={dismiss}>Dismiss</button>
    </div>) : <span/>
}