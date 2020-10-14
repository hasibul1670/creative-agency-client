import React, { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import './App.css';
import Addservice from './Components/AdminPanal/Addservice/Addservice';
import AllList from './Components/AdminPanal/AllList/AllList';
import MainPanal from './Components/AdminPanal/MainPanal/MainPanal';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Admin from'./Components/Login/Admin/Admin';
import Nomatch from './Components/Nomatch/Nomatch';
import Order from './Components/OrderPage/Order/Order';
import OrderMain from './Components/OrderPage/OrderMain/OrderMain';
import Review from './Components/OrderPage/Review/Review';
import ServiceList from './Components/OrderPage/ServiceList/ServiceList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

export const usercontex = createContext();
export const eventContext = createContext();
export const addContext = createContext();
function App() {
  
  const [loguser, setloguser] = useState({});
  const [Id, setId] = useState('');
  const [EventInfo, setEventInfo] = useState({});
  return (

    <usercontex.Provider value={[loguser, setloguser]}>
      <eventContext.Provider value={[Id, setId]}>
        <addContext.Provider value={[EventInfo, setEventInfo]}>
    <Router>
 <Switch>

 <Route path="/order"><OrderMain></OrderMain> </Route>
 <Route path="/login"><Login></Login></Route>
 <PrivateRoute path="/app/order"><Order></Order> </PrivateRoute> 
 <Route path="/app/review"><Review></Review> </Route>
 <Route path="/admin"><Admin></Admin> </Route>
 <Route path="/addservice"><Addservice></Addservice> </Route>
 <Route path="/alllist"><AllList></AllList> </Route>
 <PrivateRoute path="/adminpanal"><MainPanal></MainPanal> </PrivateRoute>
 <Route path="/app/myservice"> <ServiceList></ServiceList> </Route>
 <Route exact path="/"> <Home /> </Route>
 <Route path="*"><Nomatch></Nomatch> </Route>
 
 </Switch>
    </Router>

    </addContext.Provider>
      </eventContext.Provider>
      </usercontex.Provider>
  
  );
}

export default App;
