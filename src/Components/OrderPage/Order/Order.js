import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { addContext, eventContext, usercontex } from '../../../App';
import Sidebar from '../Sidebar/Sidebar'



function Order() {


  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/app/myservice" } };
  const [loguser, setloguser] = useContext(usercontex);

  const [Id, setId] = useContext(eventContext);
  const [EventInfo, setEventInfo] = useContext(addContext);

  const {register,handleSubmit } = useForm();
  const [eventdata,seteventdata] = useState([]);



const onSubmit=data=>{
  console.log(data);
    //////send data to server  by POST method ////////
    console.log("clicked handle ");
    history.replace(from);
    const newbooking = { ...loguser, ...data }
    fetch('https://pure-brushlands-66433.herokuapp.com/addevent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newbooking)
    })
      .then(res => res.json())
      .then(data => {
      
      })
 
}

 
  


  // const handleclick = () => {
  
  //   onsubmit();
  // }

    return (
        <section className="mt-5">
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div id='ordermain' className=" col-6 col-sm-6 col-md-7 d-flex justify-content-center">

   <form onSubmit={handleSubmit(onSubmit)} style={{height:'450px',width:'550px'}}>
<div class="form-group">
<input type="text" class="form-control"  value={loguser.Dname} placeholder="Your Name/Company's Name"  id="exampleInputEmail1" name="name"  ref={register} aria-describedby="emailHelp"/>

</div>
<div class="form-group">
<input type="email" class="form-control" value={loguser.email} placeholder="Your Email Address"  id="exampleInputEmail1" name="email" ref={register} aria-describedby="emailHelp"/>
</div>

<div class="form-group">
<input type="text"  name="ename"  ref={register} class="form-control" value={EventInfo.name} placeholder="Your Project Name"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>

<div class="form-group">
<input type="text" name="cname"  ref={register} placeholder='company’s name Designation' class="form-control" id="exampleInputPassword1"/>
</div>

<div class="form-group">
<textarea class="form-control" name="des"  ref={register}  placeholder='Project Details'   id="exampleFormControlTextarea1" rows="5"col="8"></textarea>
</div>

<div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Price"/>
    </div>
    <div class="col">
      <input type="file"  name="pic" ref={register}class="form-control" placeholder="Upload Project File"/>
    </div>
  </div>
<p></p>
<input class="btn btn-dark" type="submit"/>

</form>
            </div>

        </div>
    </section>
    )
}

export default Order
