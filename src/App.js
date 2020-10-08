import React from "react";
import CountryCards from './Components/CountryCards';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-primary'>
        <a href="#" className='navbar-brand'>React JS with Bootstrap</a>
      </nav>
      <CountryCards></CountryCards>
    </div>
  );
}

export default App;