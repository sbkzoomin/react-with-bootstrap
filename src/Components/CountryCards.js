import React from 'react';

class CountryCards extends React.component {
  render(){
    return (      
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>Card 1</h2>
          </div>
           <div className="col-md-3">
            <h2>Card 2</h2>
          </div>
           <div className="col-md-3">
            <h2>Card 3</h2>
          </div>
           <div className="col-md-3">
            <h2>Card 4</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCards;