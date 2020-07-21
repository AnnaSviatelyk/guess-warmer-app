import React from 'react'
import './HistoryPage.scss'
import CitiesOptions from '../CitiesOptions/CitiesOptions'
import PropTypes from 'prop-types'
import image from '../../assests/groot.svg'

const HistoryPage = ({ results }) => {
    const allAnswers = results.map(cur => {

        return <CitiesOptions cities={cur.cities} selectedAnswerId={cur.selectedAnswerId} key={cur.cities[0].id} />
    })

    const content = results.length ? (
        <div className='HistoryPage'>
            <h2 className="HistoryPage__heading">Here are your answers</h2>
            {allAnswers}
        </div>
    ) : (
            <div className='HistoryPage'>
                <h2 className="HistoryPage__heading">You have no answers yet</h2>
                <img className="HistoryPage__image" src={image} />

            </div>
        )

    return (
        content

    )

}

HistoryPage.propTypes = {
    results: PropTypes.array
}

export default HistoryPage