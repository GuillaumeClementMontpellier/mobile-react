import React from "react";

interface ErrorProps {
    active: Boolean
    message?: string
    dismiss: () => void
}

export default function ({active, message, dismiss, className}: ErrorProps & { className?: string }) {
    return active ? (<div className={className}>
        <p className={"error-message"}>{message}</p>
        <button className={"error-button"} onClick={dismiss}>Dismiss</button>
    </div>) : <span/>
}