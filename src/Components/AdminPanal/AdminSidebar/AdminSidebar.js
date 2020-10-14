  
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './AdminSidebar.css';
import logo from"../../../images/logos/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faBriefcase,faPlus,faUserPlus } from '@fortawesome/free-solid-svg-icons';
const AdminSidebar = ({order ,review,service}) => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <Link to="/" >
         <img  style={{height:"60px",width:"150px"}} className='mb-5 ' src={logo} alt=""/>
         </Link>
                
                <li>
                    <Link to="/alllist">
                        <FontAwesomeIcon className='icon' icon={faBriefcase} /> <span onClick={service} >Service List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addservice" >
                        <FontAwesomeIcon className='icon' icon={faPlus} /> <span onClick={review}>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" >
                        <FontAwesomeIcon className='icon' icon={faUserPlus} /> <span onClick={review}>Make Admin</span>
                    </Link>
                </li>
            </ul>
          
        </div>
    );
};

export default  AdminSidebar;