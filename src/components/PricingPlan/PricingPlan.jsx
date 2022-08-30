import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./Pricing.css";
import pricingimage from "../../images/price-1.png";

function PricingPlan() {
  const pricings = [
    {
      id: 1,
      name: "Basic",
      currency: "$19.00",
      firstoption: "Secure finance backup",
      secondoption: "Security managment ",
      thirdoption: "unlimited features",
    },
    {
      id: 2,
      name: "Standard",
      currency: "$59.00 ",
      firstoption: "Secure finance backup",
      secondoption: "Security managment ",
      thirdoption: "unlimited features",
    },
    {
      id: 3,
      name: "Premium",
      currency: "$79.00 ",
      firstoption: "Secure finance backup",
      secondoption: "Security managment ",
      thirdoption: "unlimited features",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="service-area">
              <p className="p-top">Pricing Plan</p>
              <h2> Our Pricing Plan</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {pricings.map((pricing) => (
            <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30 ">
              <div className="pricing-area-card ">
                <div className="pricing-card">
                  <div className="d-inline-flex align-items-center t-left mx-3" >
                    <div className="mx-3">
                   <img className="card-img" src={pricingimage} alt="" />
                   </div>
                    <div>
                      <h3>
                      {pricing.name}
                      </h3>
                     <h5>
                     {pricing.currency}  
                      <span style={{fontSize:"14px", color:"#2a81e9", fontWeight:"bold"}}> / Month</span>
                     </h5>
                    </div>
                  </div>
                  <hr />
                  <ul >
                    <li className="mb-3">
                      {" "}
                      <CheckIcon className="check" /> {pricing.firstoption}
                    </li>
                    <li className="mb-3">
                      {" "}
                      <CheckIcon className="check" /> {pricing.secondoption}
                    </li>
                    <li className="mb-3">
                      <CheckIcon className="check" /> {pricing.thirdoption}
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="price-btn">Discover</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PricingPlan;
