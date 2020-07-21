import React from 'react'
import './HistoryPage.scss'
import CitiesOptions from '../CitiesOptions/CitiesOptions'
import PropTypes from 'prop-types'

const HistoryPage = ({ results }) => {
    const allAnswers = results.map(cur => {

        return <CitiesOptions cities={cur.cities} selectedAnswerId={cur.selectedAnswerId} key={cur.cities[0].id} />
    })

    return (
        <div className='HistoryPage'>
            <h2 className="HistoryPage__heading">Here are your answers</h2>
            {allAnswers}
        </div>

    )

}

HistoryPage.propTypes = {
    results: PropTypes.array
}

export default HistoryPage