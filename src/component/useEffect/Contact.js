import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Contact() {
    return (
        <div>
            <Link to={'insta'}> <h1>Contact Via insta</h1></Link>
            <h1></h1>
            <Link to={'mail'}><h2> contact via email</h2></Link>
            <Outlet />
        </div>
    )
}
