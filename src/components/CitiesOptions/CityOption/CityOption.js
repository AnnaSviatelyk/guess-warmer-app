import React, { useContext } from 'react'
import './CityOption.scss'
import getIcon from '../../../helpers/weatherIcons'
import AppContext from '../../../context/app-context'
import PropTypes from 'prop-types'

const CityOption = ({ data, chosenModifierClass, click, isClicked }) => {
    const appContext = useContext(AppContext)
    const isFahrenheit = appContext.isFahrenheit
    const temp = isFahrenheit ? Math.round((data.temp * 9 / 5)) + 32 : data.temp

    return (
        <div className={`CityOption  ${chosenModifierClass}`} onClick={click}>
            <p className="CityOption__city">{data.name}</p>
            <div className="CityOption__weather-container">{isClicked ? <img className="CityOption__weather" src={getIcon(data.weather)} alt='weather condition' /> : null}</div>
            <span className='CityOption__temp'>{isClicked ? temp : null} </span>
        </div >
    )
}

CityOption.propTypes = {
    data: PropTypes.object,
    chosenModifierClass: PropTypes.string,
    click: PropTypes.func,
    isClicked: PropTypes.bool
}

export default CityOption