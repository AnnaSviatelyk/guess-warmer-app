import React, { useContext } from 'react'
import Button from './Button/Button'
import './Buttons.css'
import AppContext from '../../context/app-context'



const Buttons = () => {

    const { nextBtnClick, disabledNext, restartBtnClick, curIndex, dataLength } = useContext(AppContext)
    let buttons = (
        <div className='Buttons'>
            <Button
                click={nextBtnClick}
                disabled={disabledNext}
                type='nextBtn'>
                Next</Button>
            <Button type='restartBtn' click={restartBtnClick} disabled={curIndex === 0}>Restart</Button>
        </div>
    )

    if (curIndex === dataLength - 1) {
        buttons = (
            <div className='Buttons'>
                <Button type='restartBtn' click={restartBtnClick} disabled={curIndex === 0}>Restart</Button>
            </div>)
    }


    return (buttons)
}

export default Buttons