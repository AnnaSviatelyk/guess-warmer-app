import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'

const Button = ({ click, disabled, children, isSecondary = false }) => {
    const btnClass = isSecondary ? "Button--secondary" : ''
    return (
        <button className={`Button ${btnClass}`} onClick={click} disabled={disabled} >{children}</button>
    )

}

Button.propTypes = {
    click: PropTypes.func,
    disabled: PropTypes.bool,
    isSecondary: PropTypes.bool
}
export default Button