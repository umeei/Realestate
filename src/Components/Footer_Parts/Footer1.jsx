import React, { useState } from 'react'
import "./Footer1.css"

const Footer1 = () => {

    const [footerone , setfooterone] = useState(false)

    const footeronetogglebtn = () => {
        setfooterone(!footerone);
        let btn= document.getElementById('footer1-btn')
        if(setfooterone ===  false){
            btn.innerHTML= '- Read Less'
        }
        else{
            btn.innerHTML= '+ Read More'
        }
    }



    return (
    <>
    <div className="footer1-parent">
      <div className={footerone ? "footer1-main close":"footer1-main"}>
        <div className="footer1-p1">
            <div className="footer1-para"><p>TOP MARKETS</p></div>
            
            <div className="footer1-links">
                <div className="footer1-links-p1">
                    <ul>
                        <li>Atlanta Apartments</li>
                        <li>Austin Apartments</li>
                        <li>Baltimore Apartments</li>
                        <li>California Houses</li>
                        <li>Texas Houses</li>
                        <li>Boston Apartments</li>
                        <li>Chicage Apartments</li>
                        <li>Pet Friendly Apartments</li>
                        <li>Apartments Near Malls</li>
                        <li>Utilites-Included Rentals</li>
                        <li>Houses for Rent Near Me</li>
                        <li>Apartments Near Me</li>
                        <li>Florida Houses</li>
                    </ul>
                </div>
                <div className="footer1-links-p1">
                    <ul>
                        <li>Houston Apartments</li>
                        <li>Irvine Apartments</li>
                        <li>Los Angeles Rentals</li>
                        <li>Miami Rentals</li>
                        <li>Nashville Apartments</li>
                        <li>New Jersey Apartments</li>
                        <li>NYC Apartments</li>
                        <li>Oklahoma Houses</li>
                        <li>Orlando Apartments</li>
                        <li>Philadelphia Apartments</li>
                        <li>Cheap Apartments</li>
                        <li>New Orleans Apartments</li>
                        <li>Michigan Houses</li>
                    </ul>
                </div>
                <div className="footer1-links-p1">
                    <ul>
                        <li>Phoenix Apartments</li>
                        <li>Portland Apartments</li>
                        <li>Queens Apartments</li>
                        <li>San Antonio Apartments</li>
                        <li>San Diego Apartments</li>
                        <li>San Francisco Apartments</li>
                        <li>Seattle Apartments</li>
                        <li>Tampa Apartments</li>
                        <li>Arizona Houses</li>
                        <li>Nevada Houses</li>
                        <li>Tennessee Houses</li>
                        <li>Toronto Houses</li>
                        <li>Edmonton Apartments</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer1-p2">
            <div className="footer1-para"><p>RENTALS BY STATE</p></div>
            
            <div className="footer1-links">
                <div className="footer1-links-p1">
                    <ul>
                        <li>Alabama Apartments</li>
                        <li>Alaska Apartments</li>
                        <li>Arizona Apartments</li>
                        <li>Arkansas Apartments</li>
                        <li>California Apartments</li>
                        <li>Colorado Apartments</li>
                        <li>Connecticut Apartments</li>
                        <li>Delaware Apartments</li>
                        <li>Florida Apartments</li>
                        <li>Georgia Apartments</li>
                        <li>Hawaii Apartments</li>
                        <li>Idaho Apartments</li>
                        <li>Illinois Apartments</li>
                        <li>Indiana Apartments</li>
                        <li>Iowa Apartments</li>
                        <li>Kansas Apartments</li>
                        <li>Kentucky Apartments</li>
                    </ul>
                </div>
                <div className="footer1-links-p1">
                    <ul>
                        <li>Louisiana Apartments</li>
                        <li>Maine Apartments</li>
                        <li>Maryland Apartments</li>
                        <li>MA Apartments</li>
                        <li>Michigan Apartments</li>
                        <li>Minnesota Apartments</li>
                        <li>Mississippi Apartments</li>
                        <li>Missouri Apartments</li>
                        <li>Montana Apartments</li>
                        <li>Nebraska Apartments</li>
                        <li>Nevada Apartments</li>
                        <li>NH Apartments</li>
                        <li>New Jersey Apartments</li>
                        <li>New Mexico Apartments</li>
                        <li>New York Apartments</li>
                        <li>NC Apartments</li>
                        <li>North Dakota Apartments</li>
                    </ul>
                </div>
                <div className="footer1-links-p1">
                    <ul>
                        <li>Ohio Apartments</li>
                        <li>Oklahoma Apartments</li>
                        <li>Oregon Apartments</li>
                        <li>Pennsylvania Apartments</li>
                        <li>Rhode Island Apartments</li>
                        <li>SC Apartments</li>
                        <li>South Dakota Apartments</li>
                        <li>Tennessee Apartments</li>
                        <li>Texas Apartments</li>
                        <li>Utah Apartments</li>
                        <li>Vermont Apartments</li>
                        <li>Virginia Apartments</li>
                        <li>Washington Apartments</li>
                        <li>West Virginia Apartments</li>
                        <li>Wisconsin Apartments</li>
                        <li>Wyoming Apartments</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className="footer1-btn">
            <button onClick={footeronetogglebtn} id='footer1-btn'>- Read Less</button>
      </div>
    </div>
    </>
  )
}

export default Footer1
