import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Ticket
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import TicketList from "./components/Ticket/Ticket-list.component";
import TicketList1 from "./components/Ticket/Ticket-list.component1";
import Cart from "./components/Ticket/Cart-list.component";
import Checkout from "./components/Ticket/Checkout-list.component";
import Checkoutpage from "./components/Ticket/Checkout.component";


function App() {

    return (<Router >
        <div className = "container"  >
       
        <br/>
       <Header/>
        <Route path = "/" exact component = { TicketList}/>
        <Route path = "/Ticket/"  component = { TicketList1 }/> 
        <Route path = "/Cart/"  component = { Cart }/> 
        <Route path = "/Checkout/"  component = { Checkout }/> 
        <Route path = "/Checkpage/:id"  component = { Checkoutpage }/> 
       <Footer/>
          </div > </Router>
    );
}

export default App;