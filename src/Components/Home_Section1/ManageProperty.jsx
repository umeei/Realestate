import React from "react";
import "./ManageProperty.css";
const ManageProperty = () => {
  return (
    <>
      <div className="headmanage">
        <div className="centerdiv">
          <p className="headfont">The Perfect Place to Manage Your Property</p>

          <p className="subheadfont">
            Work with the best suite of property management tools on the market.
          </p>
        </div>
        <br />
        <div className="section1 box-2">
          <div className="leftsection_1">
            <p className="headfont">Advertise Your Rental</p>
            <br />
            <p>
              Connect with more than 75 million renters looking for new homes
              using our comprehensive marketing platform.
            </p>
           
            <p className="linksp">List Your Property</p>
           
          </div>
          <div className="rightsectopn_1">
            <img className="i3" src="https://www.apartments.com/a/815e90/modules/homepagev2/content/images/widgets/widget_advertise_your_rental_1407.png" alt="" />
          </div>

          <div>
          <div className="grid2">
          <div>
                <img className="i4" src="https://www.apartments.com/a/5a10d2/modules/homepagev2/content/images/widgets/widget_lease_100_online_1407.png" alt="" />
            </div>
            <div className="leftsection_2">
            <p className="headfont">Advertise Your Rental</p>
            <br />
            <p>
              Connect with more than 75 million renters looking for new homes
              using our comprehensive marketing platform.
            </p>
           
            <p className="linksp">List Your Property</p>
           
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProperty;
