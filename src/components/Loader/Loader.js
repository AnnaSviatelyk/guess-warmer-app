import React from 'react'
import './Loader.scss'


const Loader = () => (
    <div className="Loader-container">
        <div id="frame_circle">
            <div className="circle"></div>
        </div>
        <div id="frame">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
)

export default Loader 