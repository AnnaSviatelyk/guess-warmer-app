import React from 'react'
import CityOption from './CityOption/CityOption'
import './CitiesOptions.scss'


const CityOptions = ({ cities, selectAnswerHandler, selectedAnswerId }) => {

    const correctId = cities[0].temp > cities[1].temp ? cities[0].id : cities[1].id


    let additionalClass = ''
    const citiesToDisplay = cities.map(cur => {
        additionalClass = cur.id === correctId ? 'CityOption__Correct' : 'CityOption__False'
        additionalClass = selectedAnswerId === cur.id ? additionalClass : ''
        const onClickHandler = () => {
            if (!selectedAnswerId) {
                selectAnswerHandler(cur.id, correctId, additionalClass)
            }

        }


        return < CityOption
            key={cur.id}
            data={cur}
            chosenModifierClass={additionalClass}
            click={onClickHandler}
            isClicked={selectedAnswerId} />
    })


    return (

        <div className='CitiesOptions__all-cities'>
            {citiesToDisplay}
        </div>

    )

}

export default CityOptions