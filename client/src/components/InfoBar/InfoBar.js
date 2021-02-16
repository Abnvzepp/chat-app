import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image"/>
                <h3>{ room }</h3>
            </div>
            <div className="rightInnerContainer" alt="close image">
                <a href="/"><img src={closeIcon} /></a>
            </div>
            
        </div>
    )
}

export default InfoBar