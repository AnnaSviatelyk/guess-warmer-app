import React from 'react'
import './ToolBar.css'
import Navigation from './Navigation/Navigation'
import ToggleSwitcher from './ToggleSwitcher/ToggleSwitcher'
import { useContext } from 'react'
import AppContext from '../../context/app-context'

const ToolBar = () => {
    const { toggleClick, navClick } = useContext(AppContext)

    return (
        <div className='Toolbar'>
            <ToggleSwitcher click={toggleClick} />
            <Navigation click={navClick} />
        </div>
    )

}

export default ToolBar