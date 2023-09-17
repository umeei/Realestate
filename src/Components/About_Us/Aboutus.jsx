import React from 'react'
import './Aboutus.css'
import Realtordata from './Realtordata'
const Aboutus = () => {
  return (
    <>
    
    <div>

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
          {Realtordata.map((x,i)=>{
            return(
              <div className="card">
            <div className="face face1">
              <img className='main' src={x.image} alt="" />
              <br />
             

            </div>
            <div className="face face2">
              <div className="content">
                <div className='logo'><img   src={x.icon} alt="" /></div>
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
    </div>
    
    </>
  )
}

export default Aboutus