import React from 'react'
import platform from "./platform.png"

const Platform = (props) => {
    return (
        <div className="platform">
            <div className="logo-platform">
                <h1> The world's <br /> biggest healthcare platform </h1>
                <p> We work from 6 offices all over the world, bringing Docplanner <br /> Group to life in almost 20 countries. </p>
                <img src={platform}></img>
            </div>
            
            <div className="favories" >
                {props.platforms.map(el =>
                    <div className="leader">
                        <img src={el.image}></img>
                        <h3> {el.titre} </h3>
                        <p> {el.parag} </p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Platform
