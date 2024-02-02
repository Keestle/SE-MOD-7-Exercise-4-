import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyThemeContext} from './contexts/MyThemeContext'
import React from 'react';


export default function NavBar() {
const {theme} = useContext(MyThemeContext);
return (
<nav className="NavBar"
style={{backgroundColor: theme.background, color: theme.foreground}}>
<ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/login">login</NavLink></li>
<li><NavLink to="/BitCoinRates">BitCoinRates</NavLink></li>
</ul> 
</nav>
)
}