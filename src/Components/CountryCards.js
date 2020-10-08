import React from 'react';
import card1 from 'https://ibb.co/c2B1CR6';

class CountryCards extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
             <div className='card'>
             <img src='https://www.w3schools.com/images/lamp.jpg'/>
              <div className='card-body'>

              </div>
             </div> 
            </div>
            <div className="col-md-3">
              <div className='card'>
              <div className='card-body'>
              
              </div>
             </div>
            </div>
            <div className="col-md-3">
              <div className='card'>
              <div className='card-body'>
              
              </div>
             </div>
            </div>
            <div className="col-md-3">
              <div className='card'>
              <div className='card-body'>
              
              </div>
             </div>
            </div>
          </div>
        </div>      
      </React.Fragment>
    );
  }
}

export default CountryCards;