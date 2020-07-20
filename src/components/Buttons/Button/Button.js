import React from 'react'
import './Button.scss'

const button = ({ click, disabled, children, type }) => {
    const btnClass = type === 'nextBtn' ? "Button__next" : "Button__restart"
    return (
        <button className={btnClass} onClick={click} disabled={disabled} >{children}</button>
    )

}

export default button