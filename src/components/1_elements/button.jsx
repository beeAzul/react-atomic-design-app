import React from 'react'

export default function Button({ label, children, onClick, className, ...otherProps }) {
    return (
        <button
            onClick={onClick}
            className={`mytheme__button ${className}`}
            {...otherProps}
        >{label ? label : children}</button>
    )
}
