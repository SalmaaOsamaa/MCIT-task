import React, { useState } from "react";
import CountUp from "react-countup";
import "./Counteruppage.css";

import ScrollTrigger from "react-scroll-trigger";
function CounterUpPage() {
  const counters = [
    {
    id:1,
    image: "newimages/services-3.png",
    count: 225,
    title:"completed Project"
  },
  {
    id:2,
    image: "newimages/about-2.png",
    count: 109,
    title:"National Award"
  },
  {
    id:3,
    image: "newimages/about-3.png",
    count: 220,
    title:"Team Members"
  },
  {
    id:4,
    image: "newimages/about-1.png",
    count: 220,
    title:"Happy Client "
  },


]
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div
        className="counterup"  
      > 
      {counters.map((counter)=>(
        <div className="container row">
        <div className="col-4">
          <img className="image" src= {counter.image} alt="" />
        </div>
        <div className="col-8">
          <div className="row">
            <h1>  {counterOn && (
            <CountUp start={0} end={counter.count} duration={2} delay={0} />
          )}
          K</h1>
          </div>
          <div className="row">
          <p>{counter.title}</p>
          </div>
        </div>
        
      </div>
      ))}
        
     
       
       
        
      </div>
    </ScrollTrigger>
  );
}

export default CounterUpPage;
