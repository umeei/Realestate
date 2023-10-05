import React,{useState} from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import Footer1 from "../Footer_Parts/Footer1"
import Footer2 from "../Footer_Parts/Footer2"
import Cards from "../Home_Components/Cards"

const Home = () => {
    const [menu, setmenu] = useState(false);
    const menuoption = ()=>{
        setmenu(!menu);
    }
    return (
        <>
            <div className="main-page2">
                <img src="https://www.buclines.ch/application/files/7116/0579/0683/hero1.jpg" alt="" />
                <div className={menu ? "menu" : "menu closed"}>
                    <div className="main-menu">
                        <ul>
                            <li>Projects</li>
                            <li>Situation</li>
                            <li>Villas</li>
                            <li>Gallery</li>
                            <li>Partners</li>
                            <li>Download</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <nav>
                    <div className="main-page2-links">
                        <ul>
                            <NavLink to='/home' id='navlink' ><li>Home</li></NavLink>
                            <NavLink to='/properties' id='navlink' ><li>Properties</li></NavLink>
                            <NavLink to='/contact' id='navlink' ><li>Contact</li></NavLink>
                            <NavLink to='/aboutus' id='navlink' ><li>About</li></NavLink>
                        </ul>
                    </div>
                    <div className="main-page2-logo">
                        <img src="https://www.buclines.ch/application/files/6816/0087/1351/logo.svg" alt="" />
                    </div>
                    <div className="main-page2-btn">
                        <span>
                            <NavLink to='signin' id='navlink' ><button>Sign in</button></NavLink>
                            <NavLink to='signup' id='navlink' ><button>Sign up</button></NavLink>
                            <button id='diff-padd' onClick={menuoption}><i class="fa-solid fa-bars-staggered"></i></button>
                        </span>
                    </div>
                </nav>
                <div className="main-page2-content-heading">
                    <h1>THE CONCEPT OF LUXURY</h1>
                </div>
            </div>
            <Cards />
            <Footer1 />
            <Footer2 />
        </>
    )
}

export default Home
