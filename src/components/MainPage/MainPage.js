import React, { Component, useContext } from 'react';
import './MainPage.scss';
import CitiesOptions from '../CityOptions/CitiesOptions'
import AppContext from '../../context/app-context'



const myAppId = 'appid=8b1d635ad8d19cf658437581aeb08e79'

const MainPage = ({ curScore, maxScore }) => {
    const { isToggledToFahrenheit, cities, selectAnswerHandler, selectedAnswerId } = useContext(AppContext)
    console.log(selectAnswerHandler)

    return (
        <>
            <div className="Cities-container">
                <h1 className='Cities-container__question'>Which is warmer?</h1>
                <p className='Cities-container__score'>Your score is: {curScore}/{maxScore}</p>
                <CitiesOptions cities={cities} selectAnswerHandler={selectAnswerHandler} selectedAnswerId={selectedAnswerId} />
            </div>
        </>
    )

}

export default MainPage