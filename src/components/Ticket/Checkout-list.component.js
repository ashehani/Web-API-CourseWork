import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"
const Checkout = (props) => ( 
    <tr>
    <td > { props.Checkout.Depdestination } </td> 
    <td> {props.Checkout.Arridestination} </td > { " " } 
    <td > { props.Checkout.Depdate  } </td>{" "}
    <td > { props.Checkout.Arrdate } </td> 
    <td > { props.Checkout.Cabinclass } </td> 
    <td > { props.Checkout.Airline } </td> 
    <td > { props.Checkout.Price } </td> 
    <td > { props.Checkout.Duration } </td>  

   
     </tr>
);

export default class CheckoutList extends Component {
    constructor(props) {
        super(props);
       
       

        this.state = {

            
            Checkout: [],
           
            
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Checkout/")
            .then((response) => {
                this.setState({ Checkout: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Checkout/")
            .then((response) => {
                this.setState({ Checkout: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    CheckoutList() {
        return this.state.Checkout.map((currentCheckout) => {
            return ( <
                Checkout Checkout = { currentCheckout }
                key = { currentCheckout._id }
                />
            );
        });
    }

   


   
     


      

   

    render() {
        return ( 
        <div className = "container" >
        <Navbar/>
       <div className="row m-0 p-0 col-md-12">
        </div>
           
            
            <div  > </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > Check Out </h3>
             </div > 
          
             
              <div className = "col-lg-3 mt-1 mb-2" >

              
           
             </div > 
              </div>
            
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Dep destination </th> 
            <th> Arr idestination </th >
             < th > Dep Date  </th> 
             <th> Arr Date </th>
             <th> Cabinclass </th>
            <th> Airline </th >
            <th > Price </th> 
            <th> Airline </th >
            <th > Meal </th> 
             <th> Seat </th>
           
            </tr> </thead > 
            <tbody >  {
                this.state.Checkout.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.Depdestination } </td> 
                    <td> {props.Arridestination} </td > 
                    <td > { props.Depdate  } </td>
                     <td > { props.Arrdate } </td> 
                     <td > { props.Cabinclass } </td> 
                     <td > { props.Airline } </td> 
                     <td > { props.Price } </td> 
                     <td > { props.Duration } </td> 
                     <td > { props.Meal } </td> 
                     <td > { props.Seat } </td> 
                    
                     
                     </ tr >))} 
        
                       </tbody> </table > 
            </div >
        );
    }
}