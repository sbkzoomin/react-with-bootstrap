import React from 'react';

class CountryCards extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&w=1000&q=80" className='img-fluid' alt=""/>
              <div className='card-body'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
              </div>
             </div> 
            </div>
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&w=1000&q=80" className='img-fluid' alt=""/>
              <div className='card-body'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
              </div>
             </div> 
            </div>
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&w=1000&q=80" className='img-fluid' alt=""/>
              <div className='card-body'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
              </div>
             </div> 
            </div>
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&w=1000&q=80" className='img-fluid' alt=""/>
              <div className='card-body'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
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