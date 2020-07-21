import React from 'react'
import './ToggleSwitcher.scss'
import PropTypes from 'prop-types'

const Switcher = ({ click }) => (
    <div className='ToggleSwitcher' onChange={click}>
        <span className='ToggleSwitcher__fahrenheit'>°F</span>
        <input className='ToggleSwitcher__input' type="checkbox" id="switch" />
        <label className='ToggleSwitcher__label' htmlFor="switch">Toggle</label>
    </div>
)

Switcher.propTypes = {
    click: PropTypes.func
}

export default Switcher