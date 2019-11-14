import React from 'react'

const Global = (props) => {
    return (
        <div className="global">
            <h2>  We are a global <br/> company <br/> with local culture </h2>
            <ul className="svg">
           {props.globals.map(el=>
             <li className="svgs"> {el} </li> 
            )} 
            </ul>
        </div>
    )
}

export default Global
