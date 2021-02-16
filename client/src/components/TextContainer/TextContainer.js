import React from 'react'
import './TextContainer.css'
import onlineIcon from '../../icons/onlineIcon.png'

const TextContainer = ({ users }) => {
    return (
        <div className="textContainer">
            <div>
                <h1>Real Time Chat Application</h1>
            </div>
            {
                users
                ? (
                    <div>
                        <h1>People online:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({name}) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="online" src={onlineIcon}/>
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>

                ) : null

            }
        </div>
    )
}

export default TextContainer
