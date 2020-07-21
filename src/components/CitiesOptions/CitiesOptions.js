import React from 'react'
import CityOption from './CityOption/CityOption'
import './CitiesOptions.scss'
import PropTypes from 'prop-types'

const CitiesOptions = ({ cities, selectAnswerHandler, selectedAnswerId }) => {

    const correctId = cities[0].temp > cities[1].temp ? cities[0].id : cities[1].id
    const isTempEqual = selectedAnswerId && cities[0].temp === cities[1].temp


    let additionalClass = ''

    const citiesToDisplay = cities.map(cur => {
        additionalClass = isTempEqual || cur.id === correctId ? 'CityOption__correct' : 'CityOption__false'
        additionalClass = isTempEqual || selectedAnswerId === cur.id ? additionalClass : ''
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
        <div className='CitiesOptions'>
            {citiesToDisplay}
        </div>
    )

}

CitiesOptions.propTypes = {
    cities: PropTypes.array,
    selectedAnswerHandler: PropTypes.func,
    selectedAnswerId: PropTypes.number
}

export default CitiesOptions