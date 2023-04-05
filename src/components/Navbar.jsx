import React from 'react'
import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} />
            <p>My Travel Journal</p>
        </nav>
    )
}
