import AdminSidebar from '../AdminSidebar/AdminSidebar';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
function Addservice() {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const {register,handleSubmit } = useForm();
  const [eventdata,seteventdata] = useState([]);
const [file,setfile]=useState(null);
const [info,setinfo]=useState();
const blur=(e)=>{
const newinfo ={...info};
newinfo[e.target.name]=e.target.value;
console.log(newinfo);
    setinfo(newinfo);
}
const filechange=(e)=>{
const newfile=e.target.files[0];
setfile(newfile);
}
const onSubmit=data=>{
  console.log(info.name);
    //////send data to server  by POST method ////////
    // console.log("clicked handle ");
    history.replace(from);
    // const newbooking = { ...loguser, ...data }
    const formData = new FormData()
    formData.append('file', file);
    formData.append('title', info.title);
    formData.append('text', info.text);
    fetch('https://pure-brushlands-66433.herokuapp.com/addservice', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
      }
    return (
        <section className="mt-5">
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div id='ordermain' className=" col-6 col-sm-6 col-md-7 d-flex justify-content-center">
   <form onSubmit={handleSubmit(onSubmit)} style={{height:'450px',width:'556px'}}>
<div class="form-group">
<label htmlFor=""> Service Title</label>
<input onBlur={blur} type="text" name="title"   class="form-control"  placeholder="Enter Title"  aria-describedby="emailHelp"/>
</div>
<div class="row">
<div class="form-group">
<label htmlFor=""> Description</label>
<textarea onBlur={blur}  class="form-control" name="text"   placeholder='Enter Discription'  rows="5"cols="40"></textarea>
</div>
    <div class="col">
    <label htmlFor=""> Icon</label>
      <input onChange={filechange} type="file"  name="pic" ref={register}class="form-control" placeholder="Upload Project File"/>
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

export default Addservice
