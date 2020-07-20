import React, { useContext } from 'react';
import './MainPage.scss';
import CitiesOptions from '../CitiesOptions/CitiesOptions'
import AppContext from '../../context/app-context'


const MainPage = ({ curScore, maxScore }) => {
    const { cities, selectAnswerHandler, selectedAnswerId } = useContext(AppContext)

    return (
        <div className="Cities-container">
            <h1 className='Cities-container__question'>Which is warmer?</h1>
            <p className='Cities-container__score'>Your score is: {curScore}/{maxScore}</p>
            <CitiesOptions cities={cities} selectAnswerHandler={selectAnswerHandler} selectedAnswerId={selectedAnswerId} />
        </div>
    )
}

export default MainPage