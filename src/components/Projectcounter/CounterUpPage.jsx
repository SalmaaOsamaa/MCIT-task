import React, { useState } from "react";
import CountUp from "react-countup";
import "./Counteruppage.css";
import services from '../../images/services-3.png'
import ScrollTrigger from "react-scroll-trigger";
function CounterUpPage() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div
        className="counterup"  
      >
        <div className="container row">
          <div className="col-4">
            <img className="image" src= {services} alt="" />
          </div>
          <div className="col-8">
            <div className="row">
              <h1>  {counterOn && (
              <CountUp start={0} end={225} duration={2} delay={0} />
            )}
            K</h1>
            </div>
            <div className="row">
            <p>Completed Project</p>
            </div>
          </div>
          
        </div>
        <div className="container row">
          <div className="col-4">
            <img className="image" src= {services} alt="" />
          </div>
          <div className="col-8">
            <div className="row">
              <h1>  {counterOn && (
              <CountUp start={0} end={250} duration={2} delay={0} />
            )}
            +</h1>
            </div>
            <div className="row">
            <p>Completed Project</p>
            </div>
          </div>
          
        </div>
        <div className="container row">
          <div className="col-4">
            <img className="image" src= {services} alt="" />
          </div>
          <div className="col-8">
            <div className="row">
              <h1>  {counterOn && (
              <CountUp start={0} end={109} duration={2} delay={0} />
            )}
            +</h1>
            </div>
            <div className="row">
            <p>Completed Project</p>
            </div>
          </div>
          
        </div>
        <div className="container row">
          <div className="col-4">
            <img className="image" src= {services} alt="" />
          </div>
          <div className="col-8">
            <div className="row">
              <h1>  {counterOn && (
              <CountUp start={0} end={220} duration={2} delay={0} />
            )}
            K</h1>
            </div>
            <div className="row">
            <p>Completed Project</p>
            </div>
          </div>
          
        </div>
        
        
      </div>
    </ScrollTrigger>
  );
}

export default CounterUpPage;
