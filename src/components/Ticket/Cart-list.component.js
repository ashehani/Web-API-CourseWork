import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"
const Cart = (props) => ( 
    <tr>
    <td > { props.Cart.Depdestination } </td> 
    <td> {props.Cart.Arridestination} </td > { " " } 
    <td > { props.Cart.Depdate  } </td>{" "}
    <td > { props.Cart.Arrdate } </td> 
    <td > { props.Cart.Cabinclass } </td> 
    <td > { props.Cart.Airline } </td> 
    <td > { props.Cart.Price } </td> 
    <td > { props.Cart.Duration } </td>  

   
     </tr>
);

export default class CartList extends Component {
    constructor(props) {
        super(props);
       
        

        this.state = {
            Depdestination: "",
            Arridestination: "",
            Depdate  :"",
            Arrdate: "",
            Cabinclass: "",
            Airline: "",
            Price: "",
            Duration: "",
            Cart: [],
           
           
            
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Cart/")
            .then((response) => {
                this.setState({ Cart: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Cart/")
            .then((response) => {
                this.setState({ Cart: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

   

    CartList() {
        return this.state.Cart.map((currentCart) => {
            return ( <
                Cart Cart = { currentCart }
                deleteCart = { this.deleteCart }
                key = { currentCart._id }
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
            <h3 > All Cart Details  </h3>
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
             <th> Duration </th>
            <th> Checkout</th > 
            </tr> </thead > 
            <tbody >  {
                this.state.Cart.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.Depdestination } </td> 
                    <td> {props.Arridestination} </td > 
                    <td > { props.Depdate  } </td>
                     <td > { props.Arrdate } </td> 
                     <td > { props.Cabinclass } </td> 
                     <td > { props.Airline } </td> 
                     <td > { props.Price } </td> 
                     <td > { props.Duration } </td> 
                    <td >
                   
                     
                    < Link to = { "/Checkpage/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Check Out </Button></Link > 

                      </td>  </ tr >))}  </tbody> </table > 
                     

        
                       
            </div >
        );
    }
}