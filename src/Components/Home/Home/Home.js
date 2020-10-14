import React from 'react';

import Clints from '../Clints/Clints';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Support from '../Support/Support';
import Work from '../Work/Work';
import './Home.css'

function Home() {
    return (
        <div class="home-main container">
            <div className="home">
            <Header></Header>
            </div>
          
            <Support></Support>
            <Service></Service>
            <Work></Work>
            <Clints></Clints>
            <Contact></Contact>
       
               
        </div>
    )
}

export default Home
