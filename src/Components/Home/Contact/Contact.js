import React from 'react'

function Contact() {
    return (
        <div id ='contact' class=' mtt '>
<div className="margin row">

<div className="col-12 col-sm-12 col-md-5 ml-5 mt-5" >
    <h1 className='h1'>Let us handle your project, professionally.</h1>
    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general. </p>
  

</div>
<div className="col-12 col-sm-12 col-md-5 ml-5 mt-5" >
<form>
<div class="form-group">
<input type="email" class="form-control" placeholder="Email address"  id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div class="form-group">
<input type="text" placeholder='Your name / company’s name' class="form-control" id="exampleInputPassword1"/>
</div>
<div class="form-group">
<textarea class="form-control" placeholder='Your Message'   id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button type="submit" class="btn btn-dark">Submit</button>
</form>
</div>
</div>
<br/>

<h6 className='text-center'>Copyright Orange Labs 2020</h6>
        </div>
         
       
    )
}

export default Contact
