import React from "react";

interface ButtonProps {
    active: Boolean
    children: string
    onClick: () => void
}

function Button({active, children, onClick, className}: ButtonProps & { className: string }) {
    if (!active) {
        return <span>{children}</span>
    }

    return (
        <button className={className} onClick={e => {
            e.preventDefault();
            onClick()
        }}>
            {children}
        </button>
    )
};

export default Button