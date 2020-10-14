import React, { useState } from 'react';

import fakedata from '../../../fakeData';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Clints() {
  const [event,setevent]=useState([]);

  const review=()=>{
    fetch('https://pure-brushlands-66433.herokuapp.com/ser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fakedata)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }


  useEffect(() => {
    fetch('https://pure-brushlands-66433.herokuapp.com/ser')
      .then(res => res.json())
      .then(data =>{
        console.log(data);
    setevent(data);
   
       
      }) 
  }, [])

    return (
        <div>
        <div className='margin'>
  
            <h2 className='titlee'>Clients<span className='ser'> Feedback</span> </h2>
        </div>

        <div class='mt-5 mb-5 '>
       
          { event.map(e =>
          
  
          
            <div class="ca card ">
            <div class='d-flex justify-content-start'>
              <img style={{height:"74px",width:"74px"}}  src={e.pic} class="card-img-top" alt="Image"/>
              <div class="card-body">
           <h5 class="card-title">{e.name}</h5>
          <h6>{e.post}</h6>
                </div>
                </div>
          <p class="card-text">{e.des}</p>
            </div>
            
            
            )
          }
        </div>


        </div>
    )
}

export default Clints
