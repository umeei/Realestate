import React from "react";
import "./Rent.css";
const RentingManagement = () => {
  return (
    <>
      <div className="rent-maincontent ">
        <hr />
        <div className="rent-upper">
          <h1>Discover Homeownership on Homes.com</h1>
          <h5>
            Renting is great, but maybe you’re thinking about buying a home instead. We want you to find the right place. That’s why our sister site, Homes.com, is designed to help you find your dream home, even if you’re a first time buyer.
          </h5>
        </div>
        <div className="rent-lower">
          <div className="rent-lower-content">
            <h3>Tips for Renters</h3>
            <p>
              Find answers to all of your renting questions with the best renter’s guide in the galaxy.
            </p>
            <a href="/adf">Browse Articles</a>
          </div>
          <div className="rent-lower-image">
            <img
              src="https://www.apartments.com/a/d56f5f/modules/homepagev2/content/images/widgets/widget_tips_for_renters_469.png"
              alt=""
            />
          </div>
          
        </div>

        <div className="rent-lower">
          <div className="rent-lower-image">
            <img
              src="https://www.apartments.com/a/3816b4/modules/homepagev2/content/images/widgets/widget_property_mgr_resources_1407.png"
              alt=""
            />
          </div>
          <div className="rent-lower-content">
            <h3>Property Manager Resources</h3>
            <p>
              Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more.
            </p>
            <a href="/adf">Stay Informed</a>
          </div>

          
        </div>


        <div className="rent-lower">
          <div className="rent-lower-content">
            <h3>Take Us With You</h3>
            <p>
              Keep Apartments.com in the palm of your hand throughout your rental journey.
            </p>
            <a href="/adf">Start Your Search</a>
          </div>
          <div className="rent-lower-image">
            <img
             style={{scale:"1.1"}}
              src="https://www.apartments.com/a/a92084/modules/homepagev2/content/images/widgets/widget_take_us_with_you_469.png"
              alt=""
            />
          </div>
          
        </div>
        <div className="rent-end-message">
          <p>
          Search over 1 million listings including <span>apartments</span> , <span>houses</span>, <span>condos</span>, and <span>townhomes</span> available for rent. You’ll find your next home, in any style you prefer.
          </p>
        </div>
      </div>
    </>
  );
};

export default RentingManagement;
