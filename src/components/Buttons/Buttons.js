import React, { useContext } from 'react'
import Button from './Button/Button'
import './Buttons.scss'
import AppContext from '../../context/app-context'



const Buttons = () => {

    const { nextBtnClick, disabledNext, restartBtnClick, curIndex, dataLength } = useContext(AppContext)
    let buttons = curIndex === dataLength - 1 ? (
        <div className='Buttons'>
            <Button isSecondary click={restartBtnClick} disabled={curIndex === 0}>Restart</Button>
        </div>)
        : (
            <div className='Buttons'>
                <Button
                    click={nextBtnClick}
                    disabled={disabledNext}
                >
                    Next
                </Button>
                <Button isSecondary click={restartBtnClick} disabled={curIndex === 0}>Restart</Button>
            </div>
        )

    return (buttons)
}

export default Buttons