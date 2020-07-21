import React, { useContext } from 'react'
import './Navigation.scss'
import AppContext from '../../../context/app-context'
import PropTypes from 'prop-types'

const NavigationItems = ({ click }) => {
    const { isHistory } = useContext(AppContext)
    console.log(isHistory)
    return (<ul className='Navigation'>
        <li className={`Navigation__item ${!isHistory ? 'Navigation__item--active' : ''}`} onClick={() => click('main')}>Main</li>
        <li className={`Navigation__item ${isHistory ? 'Navigation__item--active' : ''}`} onClick={() => click('history')}>History</li>
    </ul>)
}

NavigationItems.propTypes = {
    click: PropTypes.func
}

export default NavigationItems