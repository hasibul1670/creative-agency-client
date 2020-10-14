import React from 'react';
import c1 from '../../../images/carousel-1.png';
import c2 from '../../../images/carousel-2.png';
import c3 from '../../../images/carousel-3.png';
import c4 from '../../../images/carousel-4.png';
import c5 from '../../../images/carousel-5.png';





function Work() {
    return (
      <div className="margin row"   style={{height:"600px",width:"100%",background: '#111430'}} >
             <div className="col-12 col-sm-12 col-md-11 ml-5 mt-5" >
             <div >
       
       <div class=' mb-5'>
       <h2 className='mt-5 titlee' style={{color:"white"}}  >Here are some of <span className='ser'> our works</span></h2>
       </div >
         <div id="carouselExampleIndicators" class="carousel slide mb-5" data-ride="carousel">
<ol class="carousel-indicators">
 <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner justify-content-center">
 <div class="carousel-item active">
   <img  style={{height:"344px" }} src={c1} class="  d-block w-75" alt="..."/>
 </div>
 <div class="carousel-item">
   <img   style={{height:"334px"}}  src={c2} class="d-block w-75" alt="..."/>
 </div>
 <div class="carousel-item">
   <img   style={{height:"334px"}}  src={c3} class="d-block w-75" alt="..."/>
 </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
 <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
 <span class="carousel-control-next-icon" aria-hidden="true"></span>
 <span class="sr-only">Next</span>
</a>
</div>

     </div>
             </div>
      </div>
       
    )
}

export default Work
