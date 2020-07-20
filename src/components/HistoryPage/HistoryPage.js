import React from 'react'
import './HistoryPage.scss'
import CitiesOptions from '../CityOptions/CitiesOptions'

const HistoryPage = ({ results }) => {
    const data = results
    const allAnswers = data.map(cur => {
        console.log(cur.cities)
        return <CitiesOptions cities={cur.cities} selectedAnswerId={cur.selectedAnswerId} />
    })
    return (
        <div className='HistoryPage'>
            <h2 className="HistoryPage__heading">Here are your answers</h2>
            {allAnswers}
        </div>



    )

}


export default HistoryPage