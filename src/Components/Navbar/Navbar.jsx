import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav id='allnav'>
                <div className="main-page-links">
                    <ul>
                        <NavLink to='/home' id='navlink' ><li>Home</li></NavLink>
                        <NavLink to='/properties' id='navlink' ><li>Properties</li></NavLink>
                        <NavLink to='/contact' id='navlink' ><li>Contact</li></NavLink>
                        <NavLink to='/aboutus' id='navlink' ><li>About</li></NavLink>
                        <NavLink to='/aboutus' id='navlink' ><li>About</li></NavLink>
                    </ul>
                </div>
                <div className="main-page-logo">
                    <img src="https://www.buclines.ch/application/files/6816/0087/1351/logo.svg" alt="" />
                </div>
                <div className="main-page-btn">
                    <span>
                        <NavLink to='signin' id='navlink' ><button>Sign in</button></NavLink>
                        <NavLink to='signup' id='navlink' ><button>Sign up</button></NavLink>
                        <button id='diff-padd'><i class="fa-solid fa-bars-staggered"></i></button>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
