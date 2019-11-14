import React from 'react'
import Logo from "./logo.svg"
const Header = (props) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo}></img>
            </div>
            <ul className="menu">
                {props.menu_items.map(el =>
                    <li className="sub">
                        <a href="#"> {el.menu} </a>
                        {el.Submenu && <ul className="submenu"> {el.Submenu.map(el=> <li> <a href="#"> {el.submenu} </a> </li>        )} 
                             </ul>}
                            
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Header


