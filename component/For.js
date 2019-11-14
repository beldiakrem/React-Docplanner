import React from 'react'

const For = (props) => {
    return (
        <div className="for">
            {props.fors.map(el=>
             <div className={el.cssStyle} >
             <p> {el.title} </p> 
             <p> {el.paragraphe} </p> 
             <div>
              {el.country && 
              <select>
                        {el.country.map(el=>
                          <option> {el} </option> 
                          )}
          
           </select>}
           </div>
             <img src={el.image} ></img>
          </div>
                )}
        </div>
    )
}

export default For
