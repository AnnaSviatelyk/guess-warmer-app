import React, { useContext } from 'react';
import './MainPage.scss';
import CitiesOptions from '../CitiesOptions/CitiesOptions'
import AppContext from '../../context/app-context'
import PropTypes from 'prop-types'

const MainPage = ({ curScore, maxScore }) => {
    const { cities, selectAnswerHandler, selectedAnswerId } = useContext(AppContext)

    return (
        <div className="CitiesContainer">
            <h1 className='CitiesContainer__question'>Which is warmer?</h1>
            <p className='CitiesContainer__score'>Your score is: {curScore}/{maxScore}</p>
            <CitiesOptions cities={cities} selectAnswerHandler={selectAnswerHandler} selectedAnswerId={selectedAnswerId} />
        </div>
    )
}

MainPage.propTypes = {
    curScore: PropTypes.number,
    maxScore: PropTypes.number
}

export default MainPage