import React from 'react';
import card1 from '../assets/img/card_1.jpg';

class CountryCards extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
             <div className='card'>
             <img src={card1}/>
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