import React from 'react'
import "./MainPage.css"
import { Textillate } from 'textillate-react'
import { NavLink } from 'react-router-dom'
import Footer1 from "../Footer_Parts/Footer1"
import Footer2 from "../Footer_Parts/Footer2"
import Cards from "../Home_Components/Cards"

const MainPage = () => {

    return (
        <>
            <div className="main-page-black">
                <h2>
                <Textillate id='h2-text'
                            option={{
                                in: { effect: 'fadeInUp', sequence: true },
                                out: 'none',
                                loop: true,
                                initialDelay: 500,

                            }}
                        >
                            <h1>Realestate</h1>
                        </Textillate>                    
                </h2>
            </div>
            <div className="main-page">
                <img src="https://www.buclines.ch/application/files/7116/0579/0683/hero1.jpg" alt="" />

                <nav>
                    <div className="main-page-links">
                        <ul>
                            <NavLink to='/home' id='navlink' ><li>Home</li></NavLink>
                            <NavLink to='/properties' id='navlink' ><li>Properties</li></NavLink>
                            <NavLink to='/contact' id='navlink' ><li>Contact</li></NavLink>
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
                <div className="main-page-content-heading">
                    <h1>
                        <Textillate id='h1-text'
                            option={{
                                in: { effect: 'fadeInUp', sequence: true },
                                out: 'none',
                                loop: true,
                                initialDelay: 2700,

                            }}
                        >
                            <h1>THE CONCEPT OF LUXURY</h1>
                        </Textillate>
                    </h1>
                </div>
            </div>
            <Cards />
            <Footer1 />
            <Footer2 />
        </>
    )
}

export default MainPage
