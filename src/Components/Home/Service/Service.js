import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { addContext } from '../../../App';


function Service() {
  const [EventInfo, setEventInfo] = useContext(addContext);
  let history = useHistory()
  const [event,setevent]=useState([]);
  useEffect(() => {
    fetch('https://pure-brushlands-66433.herokuapp.com/service')
      .then(res => res.json())
      .then(data =>{
          setevent(data); 
      }) 
  }, [])

  function handleCard(e) {
    setEventInfo(e);
    history.replace("/app/order");
  }
    return (
        <div>
        <div id="service" className='margin'>
            <h2 className='titlee'>Provide awesome <span className='ser'>services</span> </h2>
        </div>

        <div onClick={handleCard} class='mt-5 mb-5 '>
    

        { event.map
        (e =>
          <div class="ca card ">
          <div class='d-flex justify-content-start'>
          <img style={{height:"74px",width:"74px"}} src={`data:image/png;base64,${e.image.img}`}/>
            <div class="card-body">
         <h5 class="card-title">{e.name}</h5>
        <h6>{e.title}</h6>
              </div>
              </div>
        <p class="card-text">{e.text}</p>
          </div>

          )
        }

            
        </div>


        </div>
    )
}

export default Service
