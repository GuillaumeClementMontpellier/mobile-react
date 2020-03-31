import React from "react";
import {Message} from "../../state/UI";

interface MessageProps {
    active: Boolean
    message?: Message
    dismiss: () => void
}

export default function ({active, message, dismiss, className}: MessageProps & { className?: string }) {
    return active ? (<div className={className}>
        <p className={"message-value"}>{message?.message}</p>
        <button className={"message-button"} onClick={dismiss}>Dismiss</button>
    </div>) : <span/>
}