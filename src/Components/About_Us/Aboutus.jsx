import React from 'react'
import './Aboutus.css'
import "../Properties/Properties.css"
import Navbar from "../Navbar/Navbar"
import FilterBox from "../Create/FilterBox"
import Realtordata from './Realtordata'
import Footer2 from "../Footer_Parts/Footer2"
// import AboutCarousel from './AboutCarousel'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Aboutus = () => {
  return (
    <>

      <div className="about-main">
        <img src="https://preview.colorlib.com/theme/south/img/bg-img/cta.jpg.webp" alt="" />
        <Navbar />
        <div className="properties-section1">
          <div className="properties-s1-backimage">
            <img src="https://preview.colorlib.com/theme/south/img/bg-img/hero1.jpg.webp" alt="" />
            <h1>ABOUT US</h1>
            <h5>SEARCH FOR YOUR HOME</h5>
          </div>
          <div className="properties-s1-filterbox">
            <FilterBox />
          </div>
        </div>
        <div className="about-page2">
          <div className="about-page2-p1">
            <div className="about-page2-p1-1">
              <h1>WE SEARCH FOR THE PERFECT HOME</h1>
              <h6>Suspendisse dictum enim sit amet libero</h6>
            </div>
            <div className="about-page2-p1-2">
              <div className="about-page2-p1-2-image">
                <img src="https://preview.colorlib.com/theme/south/img/bg-img/about.jpg.webp" alt="" />
              </div>
              <div className="about-page2-p1-2-content">
                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada. Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id. Phasellus fringilla nisl sed sem scelerisque, eget aliquam magna vehicula.</p>
              </div>
            </div>
          </div>
          <div className="about-page2-p2">
            <div className="about-page2-p2-1">
              <h1>FEATURED PROPERTIES</h1>
              <h6>Suspendisse dictum enim sit amet libero</h6>
            </div>
            <div className="about-page2-p2-2">
            <div className="properties-section2-cards-item">
                  <div className="properties-section2-cards-item-image">
                    <img src="https://preview.colorlib.com/theme/south/img/bg-img/feature1.jpg.webp" alt="" />
                    <h4>FOR SALE</h4>
                    <h2>$ 945,679</h2>
                  </div>
                  <div className="properties-section2-cards-item-content">
                    <h2>Villa in Los Angeles</h2>
                    <h5><img src="https://preview.colorlib.com/theme/south/img/icons/location.png.webp" alt="" />Upper Road 3411, no.34 CA</h5>
                    <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                    <div>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/new.png.webp" alt="" /></span>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/bathtub.png.webp" alt="" /><h5>2</h5></span>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/garage.png.webp" alt="" /><h5>2</h5></span>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/space.png.webp" alt="" /><h5>120 sq ft</h5></span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="about-page3">
          <div className="about-page3-content">
            <h1>ARE YOU LOOKING FOR A PLACE TO RENT?</h1>
            <h4>Suspendisse dictum enim sit amet libero malesuada feugiat.</h4>
            <button>Search</button>
          </div>
        </div>
        <div className="about-page4">
          <h1>MEET THE TEAM</h1>
          <h6>Suspendisse dictum enim sit amet libero</h6>
          <div className="about-page4-team">
            {Realtordata.map((v, i) => {
              return (
                <div className="about-page4-item">
                  <div className="about-page4-item-image">
                    <img src={v.image} alt="" />
                  </div>
                  <div className="about-page4-item-content">
                    <span><img src={v.icon} alt="" /></span>
                    <h3>{v.name}</h3>
                    <p>Realtor</p>
                    <h6><i class="goldencolor fa-solid fa-phone-volume"></i> {v.phone}</h6>
                    <h6><i class="goldencolor fa-solid fa-envelope"></i> office@template.com</h6>
                  </div>
                </div>

              )
            })}
          </div>
        </div>
      <Footer2 />
      </div>



      {/* <div>

        <div id="apage1 ">
          <div id="backimage">
            <div className='abheading'><p>About Us </p></div>
          </div>
        </div>
        <div id="page2">
          <div className='leftsection'>
            <p id='headp'>WE SEARCH FOR THE PERFECT HOME</p>
            <p>Suspendisse dictum enim sit amet libero</p>
            <div>
              <div id="img">
                <img className='i' src="https://preview.colorlib.com/theme/south/img/bg-img/about.jpg.webp" alt="" />
              </div>
              <div id="content">
                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada. Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id. Phasellus fringilla nisl sed sem scelerisque, eget aliquam magna vehicula.</p>
              </div>
            </div>
          </div>
          <div className='rightsection'>
            <p id='headp'>FEATURED PROPERTIES</p>
            <p>Suspendisse dictum enim sit amet libero</p>
            <div className="cardcarousel">

            </div>
          </div>


        </div>
        <div id="page3">
          <div className="back2">
            <p className="padding">Helo
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tenetur vero at dicta veniam dolor necessitatibus, qui libero nisi quae delectus. Hic nesciunt debitis at eaque error sint aperiam laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae sapiente possimus a veritatis, ullam temporibus eveniet natus dignissimos iusto saepe, ipsa reiciendis sint nihil doloribus? Asperiores nulla consequuntur odio.
              Nemo ut in velit cum nulla sapiente dicta delectus. Magnam aliquam, neque provident similique dolorem repellat. Laboriosam ex ratione accusamus unde. Aliquid eveniet voluptate nisi ad laudantium explicabo reprehenderit libero.
              Non unde blanditiis doloremque ducimus inventore harum laborum fuga? Ipsam, magnam, neque officia tenetur temporibus eos laborum, quo repudiandae vel atque impedit minima. Ratione architecto quaerat sint iusto. Exercitationem, praesentium!
              Eaque consequatur repudiandae dolore repellendus amet eligendi, soluta nam iste odit quaerat cum vitae culpa, ex explicabo saepe perferendis ab ea quia. Error iusto autem doloribus temporibus voluptates, dolore repudiandae.
              Soluta debitis fugiat sapiente maiores odio aliquid sint? Minus consectetur provident, totam sequi quidem numquam molestias in laborum repellat illo quibusdam corporis est ipsum iusto nihil non ducimus explicabo vero!</p>
          </div>
        </div>


        <div id="page4">
          <div className="realtorhead">
            <p className='alighn'>MEET THE TEAM</p>
          </div>

          <div className="multiplecards">
            {Realtordata.map((x, i) => {
              return (
                <div className="card">
                  <div className="face face1">
                    <img className='main' src={x.image} alt="" />
                    <br />


                  </div>
                  <div className="face face2">
                    <div className="content">
                      <div className='logo'><img src={x.icon} alt="" /></div>
                      <h2 className='logo'>{x.name} </h2>
                      <div className='centerdiv topp contact'><i class="goldencolor fa-solid fa-phone-volume"></i><p className='iconcontent' >{x.phone}</p></div>
                      <div className='centerdiv contact'><i class="goldencolor fa-solid fa-envelope"></i><p className='iconcontent' >{x.email}</p></div>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>



        </div>
      </div> */}

    </>
  )
}

export default Aboutus