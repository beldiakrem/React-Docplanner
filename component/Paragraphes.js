import React from 'react'
import Log from "./log.png"
const Paragraphes = (props) => {
    return (
        <div className="paragraphes">
            <div className="log">
                <img src={Log} ></img>
            </div>
            <div className="titre">
                <h2> Making the healthcare experience more human </h2>
            </div>
            <div className="paragraphe">
                {props.paragraphes.map(el =>
                     <p> {el.parag} </p>
                )}
            </div>
        </div>
    )
}

export default Paragraphes
