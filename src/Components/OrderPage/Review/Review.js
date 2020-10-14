import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { usercontex } from '../../../App';
import Sidebar from '../Sidebar/Sidebar'

function Review() {
    const [loguser, setloguser] = useContext(usercontex);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/app/myservice" } };
    const {register,handleSubmit } = useForm();
    const [eventdata,seteventdata] = useState([]);
   
const onSubmit=data=>{
    console.log(data);
      //////send data to server  by POST method ////////
      console.log("clicked handle ");
      history.replace(from);
      const newbooking = {...loguser, ...data }
      fetch('https://pure-brushlands-66433.herokuapp.com/ser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newbooking)
      })
        .then(res => res.json())
        .then(data => {
        
        })
   
  }
  
  
    return (
        <section className="mt-5">
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div id='ordermain' className=" col-6 col-sm-6 col-md-7 d-flex justify-content-center">

   <form onSubmit={handleSubmit(onSubmit)}  style={{height:'450px',width:'550px'}}>
<div class="form-group">
<input type="text" class="form-control" name="name"  value={loguser.Dname}  ref={register} placeholder="Your name"  id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div class="form-group">
<input type="text" placeholder='company’s name Designation' name="post"  ref={register} class="form-control" id="exampleInputPassword1"/>
</div>
<div class="form-group">
<textarea class="form-control" placeholder='Discription' name="des"  ref={register}   id="exampleFormControlTextarea1" rows="5"col="8"></textarea>
</div>
<input class="btn btn-dark" type="submit"/>
</form>
            </div>

        </div>
    </section>
    )
}

export default Review
