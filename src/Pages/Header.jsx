import React from 'react'
import "./pages.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="main flex">
                <div className="logo">
                    <div className="image">
                        <img src="../logo-inverse.webp" alt="" />
                    </div>
                </div>
                <div className="menu">
                    <ul className='flex'>
                        <li>home</li>
                        <li>about</li>
                        <li>blog</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="icon">
                    <ul className='flex'>
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                        <li><i class="fa-solid fa-bars"></i></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header