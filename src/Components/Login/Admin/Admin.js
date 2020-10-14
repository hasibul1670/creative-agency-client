
import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';

import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../images/logos/logo.png';
import google from '../../../images/Google.png';
import { usercontex } from '../../../App';

function Admin() {
    
  const [loguser, setloguser] = useContext(usercontex);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/alllist" } };
  const [user, setuser] = useState({
    isSignIn: false,
    Dname: '',
    email: '',
    photoURL:''
   


  })
  var provider = new firebase.auth.GoogleAuthProvider();

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
       
        const { displayName,photoURL,email } = res.user;
        console.log(res.user);
        const signInUser = {
          isSignIn: true,
          Dname: displayName,
          email: email,
          pic:photoURL,
        }
       
        setuser(signInUser);
        setloguser(signInUser)
        history.replace(from);
      })

      .catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
  }

    return (
        <div>
    
                   <div className="login-page margin text-center  container">
                   <Link to="/" >
         <img className="mb-5 img-fluid w-25" src={LoginBg} alt="" />
         </Link>
     <br/>
     <h3 className='h1 '>Login As an Admin</h3>
     <br/>
     
    
<button onClick={handleGoogleSignIn } className='btn button' type="submit">
     <img className="img img-fluid " src={google} alt="" /> <span className='textt'>Continue With Google</span>
  </button>
  <p></p>

  <p></p>
     <h6>Don’t have an account?   <a href="#"onClick={handleGoogleSignIn} >  Create an account</a>  </h6>
   
    </div>
        </div>
    )
}

export default Admin
