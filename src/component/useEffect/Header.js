import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? "none" : "underline",
            color: isActive ? "red" : "black"

        }
    };


    return (
        <div className='header'>
            <NavLink style={navLinkStyle} className='p-7 text-4xl' to={'/home'}>Home</NavLink>
            <NavLink style={navLinkStyle} className='p-7 text-4xl' to={'/about'}>About</NavLink>
            <NavLink style={navLinkStyle} className='p-7 text-4xl' to={'/contact'}>Contact</NavLink>
        </div>
    )
}
