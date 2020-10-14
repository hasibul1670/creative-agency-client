import React from 'react'
import Navbar from '../Navbar/Navbar';
import home from "../../../images/logos/home.png";
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div>
            <Navbar></Navbar>
<p></p>
<br/>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 ml-5 mt-5" >
                    <h1 className='h1'>Let’s Grow Your
                    Brand To The
                     Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <Link to="/login" >
                    <button  style={{height:"38px",width:"100px"}} type="button" class="btn btn-dark">Login</button>
</Link>
                </div>
                <div className="col-12 col-sm-12 col-md-5" >
                    <img style={{height:"422.8px",width:"624.8px"}}  class='img-fluid' src={home} alt="" srcset=""/>
                </div>
            </div>
        </div>
    )
}

export default Header
