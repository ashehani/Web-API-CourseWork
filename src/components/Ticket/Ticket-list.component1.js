import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"
const Ticket = (props) => ( 
    <tr>
    <td > { props.Ticket.Depdestination } </td> 
    <td> {props.Ticket.Arridestination} </td > { " " } 
    <td > { props.Ticket.Depdate  } </td>{" "}
    <td > { props.Ticket.Arrdate } </td> 
    <td > { props.Ticket.Cabinclass } </td> 
    <td > { props.Ticket.Airline } </td> 
    <td > { props.Ticket.Price } </td> 
    <td > { props.Ticket.Duration } </td>  

   
     </tr>
);

export default class TicketList extends Component {
    constructor(props) {
        super(props);
       
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
            Ticket: [],
            Ticket1: [],
            Ticket2: [],
           
            
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Ticket/")
            .then((response) => {
                this.setState({ Ticket: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Ticket/")
            .then((response) => {
                this.setState({ Ticket: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteTicket(id) {
        
            axios.get('http://localhost:5000/Ticket/'+ id)
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
                    
                })
                const Cart = {
                    Depdestination: this.state.Depdestination,
                    Arridestination: this.state.Arridestination,
                    Depdate: this.state.Depdate,
                    Arrdate: this.state.Arrdate,
                    Cabinclass: this.state.Cabinclass,
                    Airline: this.state.Airline,
                    Price: this.state.Price,
                    Duration: this.state.Duration,
                   
                };
    
                axios
                    .post('http://localhost:5000/Cart/add',Cart)
                    .then((res) => console.log(res.data));
            })

            axios.delete("http://localhost:5000/Ticket/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Ticket: this.state.Ticket.filter((el) => el._id !== id),
            });
        
    }

 

    
    


    TicketList() {
        return this.state.Ticket.map((currentTicket) => {
            return ( <
                Ticket Ticket = { currentTicket }
                deleteTicket = { this.deleteTicket }
                key = { currentTicket._id }
                />
            );
        });
    }

    onSubmit= (e) => {
        e.preventDefault();
        const searchKey = this.state.Depdestination;
        const searchKey1 = this.state.Arridestination;

        axios.get("http://localhost:5000/Ticket/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Depdestination.includes(searchKey)|| props.Arridestination.includes(searchKey1)
            );
            this.setState({ Ticket: result });
            console.log(Ticket);
        });
        }


   
        handleSearchArea = (e) => {
            const searchKey = e.currentTarget.value;
    
            axios.get("http://localhost:5000/Ticket/").then((response) => {
                const resultt = response.data;
                const result = resultt.filter((props) =>
                    props.Price.includes(searchKey)
                );
                this.setState({ Ticket1: result });
            });
        };

        handleSearchArea1 = (e) => {
            const searchKey = e.currentTarget.value;
    
           
                const resultt = this.state.Ticket1;
                const result = resultt.filter((props) =>
                    props.Duration.includes(searchKey)
                );
                this.setState({ Ticket2: result });
            
        };

        handleSearchArea2 = (e) => {
            const searchKey = e.currentTarget.value;
    
           
                const resultt = this.state.Ticket2;
                const result = resultt.filter((props) =>
                    props.Airline.includes(searchKey)
                );
                this.setState({ Ticket: result });
            
        };

       
     

     


   

    render() {
        return ( 
        <div className = "container" >
        <Navbar/>
        <div className="container-fluid">
        <fieldset className="form-group mt-2 me-4">

       
         <div className="row m-0 p-0">
            <div className="col-md-4 m-0 p-2">
            <label>Price</label>

            <div className="form-floating">
            <input type = "text"
             placeholder = "Price"
               className = "form-control"
             onChange={this.handleSearchArea}
            /></div>
            </div>


           <div className="col-md-4 m-0 p-2">
           <label htmlFor="strGrade">Duration</label>
           <div className="form-floating">
           <input type = "text"
           placeholder = "Duration"
             className = "form-control"
             onChange={ this.handleSearchArea1}
           /> </div>
            </div>
            </div>

            <div className="row m-0 p-0">
            <div className="col-md-4 m-0 p-2">
            <label htmlFor="strGrade">Airline</label>
            <div className="form-floating">
            <input type = "text"
             className = "form-control"
             placeholder = "Airline"
             onChange={ this.handleSearchArea2}
            />
            </div>
            </div>


            
         
         </div>
            

            
            

            
         </fieldset>
        
        </div><div className="row m-0 p-0 col-md-12">
        </div>
           
            
            <div  > </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            
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
            <th> Add To Cart</th > 
            </tr> </thead > 
            <tbody >  {
                this.state.Ticket.map((props) => ( 
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
                   
                     

                    <Button data-inline ="true" variant = "danger btn-sm" onClick = {() => {this.deleteTicket(props._id);return false}} >Cart</Button>

                      </td>  </ tr >))}  </tbody> </table > 
                     

        
                       
            </div >
        );
    }
}