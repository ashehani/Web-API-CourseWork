import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"

export default class EditCart extends Component {
    constructor(props) {
        super(props);

        this.onChangeMeal = this.onChangeMeal.bind(this);
        this.onChangeSeat = this.onChangeSeat.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Depdestination: "",
            Arridestination: "",
            Depdate  :"",
            Arrdate: "",
            Cabinclass: "",
            Airline: "",
            Price: "",
            Duration: "",
            Meal: "",
            Seat: "Basic Window",
            Cart: [],
        };
    }

    componentDidMount() {
        
        axios.get('http://localhost:5000/Cart/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Depdestination: response.data.Depdestination,
                    Arridestination: response.data.Arridestination,
                    Depdate: response.data.Depdate,
                    Arrdate: response.data.Arrdate,
                    Cabinclass: response.data.Cabinclass,
                    Airline: response.data.Airline,
                    Price: response.data.Price,
                    Duration: response.data.Duration,
                    Meal: "Sri lankan",
                    Seat: "Basic Window",

                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Cart/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Cart: response.data.map(Cart => Cart.ID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


      onChangeSeat(e) {
        this.setState({
            Seat: e.target.value,
        });
    }


    onChangeMeal(e) {
        this.setState({
            Meal: e.target.value,
        });
    }


    onSubmit(e) {
        e.preventDefault();
      
            const Cart = {
                Depdestination: this.state.Depdestination,
                Arridestination: this.state.Arridestination,
                Depdate: this.state.Depdate,
                Arrdate: this.state.Arrdate,
                Cabinclass: this.state.Cabinclass,
                Airline: this.state.Airline,
                Price: this.state.Price,
                Duration: this.state.Duration,
                Meal: this.state.Meal,
                Seat: this.state.Seat,
               
            };
            console.log(Cart);
            
            axios
                .post('http://localhost:5000/Checkout/add/', Cart)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Checkout Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Checkout/"));
            });
        
        }

    

    render() {
        return (<div  >
             <Navbar/>
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://th.bing.com/th/id/R.3fe2167f63ccdb3f257a444489fe1e6f?rik=tq3z0OZWdUSaaA&pid=ImgRaw&r=0" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Check Out </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >

             <div className = "form-group" >
           <label >Depdestination: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Depdestination }
          />
            </div > 
            
             

           <div className = "form-group" >
           <label > Arridestination: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Arridestination}/>
            </div > 

            <div className = "form-group" >
           <label > Depdate: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Depdate }/>
            </div >

     

            <div className = "form-group" >
           <label > Arrdate: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Arrdate }/>
            </div >

            <div className = "form-group" >
           <label > Cabinclass: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Cabinclass }/>
            </div >


            <div className = "form-group" >
           <label > Airline: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Airline }/>
            </div >

            <div className = "form-group" >
           <label > Price: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Price }/>
            </div >

            <div className = "form-group" >
           <label > Duration: </label> 
           <input type = "text"
           disabled={true}
           required  className = "form-control"
           value = { this.state.Duration }/>
            </div >

            <div className = "form-group" >
            <label > Meal: </label> 
            <select ref = "Meal"
            required className = "form-control"
            value = { this.state.Meal }
            onChange = { this.onChangeMeal } >
            <option value = " Sri lankan" >Sri lankan</option> 
            <option value = "Thai" >Thai</option>
            <option value = "Chinese" >Chinese</option>
            <option value = "india" >india</option>
            </select > </div>

            <div className = "form-group" >
            <label > Seat: </label> 
            <select ref = "Seat"
            required className = "form-control"
            value = { this.state.Seat }
            onChange = { this.onChangeSeat } >
            <option value = " Basic Window" >Basic Window</option> 
            <option value = "Isle" >Isle</option>
            <option value = "Middle" >Middle</option>
            </select > </div>

            <div className = "form-group" >
            <input type = "submit"
            value = "Checkout "
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}