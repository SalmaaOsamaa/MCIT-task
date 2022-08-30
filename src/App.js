import React from 'react';
import CounterUpPage from './components/Projectcounter/CounterUpPage'
import Service from './components/Services/Service';
import './App.css';
import PricingPlan from './components/PricingPlan/PricingPlan';

function App() {
  return (
    <div className="App">
      <Service/>
      <CounterUpPage/>
      <PricingPlan/>
    
    </div>
  );
}

export default App;
