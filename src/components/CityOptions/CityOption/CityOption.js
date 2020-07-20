import React, { useContext } from 'react'
import './CityOption.scss'
import getIcon from '../../../helpers/weatherIcons'
import AppContext from './../../../context/app-context'




const CityOption = ({ data, chosenModifierClass, click, isClicked }) => {
    console.log(getIcon(data.weather))
    const appContext = useContext(AppContext)
    const isToggledToFahrenheit = appContext.isToggledToFahrenheit
    const temp = isToggledToFahrenheit ? Math.round((data.temp * 9 / 5)) + 32 : data.temp


    return (
        <div className={`CityOption  ${chosenModifierClass}`} onClick={click}>
            <p className="CityOption__city">{data.name}</p>
            <div className="CityOption__weather-container">{isClicked ? <img className="CityOption__weather" src={getIcon(data.weather)} alt='weather condition' /> : null}</div>
            <span className='CityOption__temp'>{isClicked ? temp : null} </span>
        </div >
    )
}

export default CityOption