import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import datacontact from "./Contactdata";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="contact-section1">
        <div className="contact-s1-backimage">
          <img
            src="https://preview.colorlib.com/theme/south/img/bg-img/hero1.jpg.webp"
            alt=""
          />
          <h1>Contact us</h1>
        </div>
        <div className="contact-s1-form">
          <div id="" className="contact-s1-form-left">
            {datacontact.map((x, i) => {
              return (
                <>
                  <i class={x.icon}></i>
                  <h3>{x.info}</h3>
                </>
              );
            })}
          </div>
          <div className="contact-s1-form-right">
            <h4>Ask Us About (Choose one)</h4>
            <div className="btn">
              <p>General Questions</p>
              <p>Buying Home</p>
              <p>Selling Home</p>
            </div>
            <div className="form">
              <form action="">
                <div className="input">
                  <input type="text" name="" id="" placeholder="First Name" />
                  <input type="text" name="" id="" placeholder="Last Name" />
                  <input type="email" name="" id="" placeholder="First Name" />
                  <input type="number" name="" id="" placeholder="First Name" />
                </div>
                <div className="textarea">
                  <textarea
                    name=""
                    id=""
                    cols="60"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button>Send a Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          <p>        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108951.74225543767!2d73.1185152!3d31.421235199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695539140930!5m2!1sen!2s" width="1000" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
</p>
              </div>
      </div>
    </>
  );
};

export default Contact;
