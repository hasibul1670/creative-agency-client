  
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Sidebar.css';
import logo from"../../../images/logos/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faBriefcase,faUserCog,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({order ,review,service}) => {


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <Link to="/" >
         <img  style={{height:"60px",width:"150px"}} className='mb-5 ' src={logo} alt=""/>
         </Link>
                <li>
                    <Link to="/app/order" >
                        <FontAwesomeIcon className='icon ' icon={faShoppingCart} /> <span onClick={order} >Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/app/myservice">
                        <FontAwesomeIcon className='icon' icon={faBriefcase} /> <span onClick={service} >Service List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/app/review" >
                        <FontAwesomeIcon className='icon' icon={faComment} /> <span onClick={review}>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" >
                        <FontAwesomeIcon className='icon' icon={faUserCog} /> <span onClick={review}>Admin Login</span>
                    </Link>
                </li>
            </ul>
          
        </div>
    );
};

export default Sidebar;