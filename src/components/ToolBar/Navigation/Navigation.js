import React from 'react'
import './Navigation.scss'

const navigationItems = ({ click }) => (
    <ul className='Navigation'>
        <li className='Navigation__item' onClick={() => click('main')}>Main</li>
        <li className='Navigation__item' onClick={() => click('history')}>History</li>
    </ul>
)
export default navigationItems