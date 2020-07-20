import React from 'react'
import './ToggleSwitcher.scss'

const switcher = ({ click }) => (
    <div className='ToggleSwitcher' onChange={click}>
        <span className='ToggleSwitcher__fahrenheit'>°F</span>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
    </div>
)

export default switcher