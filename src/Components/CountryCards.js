import React from 'react';

class CountryCards extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1571586100119-25470b1b8bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className='img-fluid' alt=""/>
              <div className='card-body'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
              </div>
             </div> 
            </div>
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1532288191429-2093e0783809?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className='img-fluid' alt=""/>
              <div className='card-body'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
              </div>
             </div> 
            </div>
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className='img-fluid' alt=""/>
              <div className='card-body'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
              </div>
             </div> 
            </div>
            <div className="col-md-3">
             <div className='card'>
             <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className='img-fluid' alt=""/>
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