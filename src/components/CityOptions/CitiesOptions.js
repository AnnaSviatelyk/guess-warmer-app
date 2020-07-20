import React, { useState } from 'react'
import CityOption from './CityOption/CityOption'
import './CitiesOptions.scss'


const CityOptions = ({ cities, selectAnswerHandler, selectedAnswerId, maxScore, curScore }) => {

    const correctId = cities[0].temp > cities[1].temp ? cities[0].id : cities[1].id


    let additionalClass = ''
    const citiesToDisplay = cities.map(cur => {
        const onClickHandler = () => {
            if (!selectedAnswerId) {
                selectAnswerHandler(cur.id, correctId)
            }

        }

        additionalClass = cur.id === correctId ? 'CityOption__Correct' : 'CityOption__False'
        additionalClass = selectedAnswerId === cur.id ? additionalClass : ''
        return < CityOption
            key={cur.id}
            data={cur} h
            chosenModifierClass={additionalClass}
            click={onClickHandler}
            isClicked={selectedAnswerId} />
    })


    return (
        <>

            <div className="CityOptions">
                <h1 className='CityOptions__question'>Which is warmer?</h1>
                <p className='CityOptions__score'>Your score is: {curScore}/{maxScore}</p>
                <div className='CityOptions__all-cities'>
                    {citiesToDisplay}
                </div>
            </div>
        </>



    )

}

export default CityOptions