import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { usercontex } from '../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function AllList() {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };

    const [event, setevent] = useState([]);
    const [loggedin, setloggedin] = useContext(usercontex);
  
    useEffect(() => {
      fetch('https://pure-brushlands-66433.herokuapp.com/admin')
        .then(res => res.json())
        .then(data => setevent(data));
    }, [])
    return (
        <section>
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div id='ordermain' className="col-6 col-sm-6 col-md-7 d-flex justify-content-center">
            <div class="body">
        <h3> All Ordered Services :{event.length}</h3>
        {
          event.length === 0 && <p>Loading....</p>
        }
        {
          event.map(e =>

            <div class="mb-4">
               <div class="card order-card ">
               <div class='d-flex justify-content-start'>
                 <div class="card-body">
              <h5 class="card-title order-title">Project Name: {e.ename} </h5>
             <h6 className="order-body" > Company Name: {e.cname}</h6>
             <p></p>
             <h6  className="order-body">  Clint Email: {e.email} </h6>
             <p  className="order-body" class="card-text">Description: {e.des}</p>
                   </div>
                   </div>
            
               </div>

               </div>

          )
        }
      </div>


            </div>

        </div>
    </section>
    )
}

export default AllList
