import React from 'react'

const Forever = (props) => {
    return (
        <div className="pays">
            {props.forevers.map(el=>
            <div className="tous">
                <img src={el.image}></img>
                <div className="place-button">
                <p  className="place"> {el.place} </p>
                 <a href="#"> {el.boutton} </a>
                </div>
                </div>
                )}
        </div>
    )
}

export default Forever
