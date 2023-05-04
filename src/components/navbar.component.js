import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';



const TopBar = () => {
    return(
        <Navbar bg="dark" variant="primary " className="Topbar">
            <Container>
            <div className="col-6">
            </div>
                <Navbar.Brand>
                    <h4>
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "White", fontFamily: "consolas", fontWeight:"bold"}}> </Link>{' |'}
                        
                
                        <Link to="/" style={{marginLeft: "1rem", textDecoration: "none", color: "White", fontWeight: "300"}}>Ticket1</Link>{'|'}
                        
                        <Link to="/Ticket/" style={{marginLeft: "1rem", textDecoration: "none", color: "White", fontWeight: "300"}}>Ticket2</Link>{'|'}
                        <Link to="/Cart/" style={{marginLeft: "1rem", textDecoration: "none", color: "White", fontWeight: "300"}}>Cart</Link>{'|'}
                        <Link to="/Checkout/" style={{marginLeft: "1rem", textDecoration: "none", color: "White", fontWeight: "300"}}>Check Out</Link>{'|'}
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "White", fontFamily: "consolas", fontWeight:"bold"}}> <LogoutIcon/></Link>
                   
                        <i className="fas fa-shopping-cart"></i>
                    </h4>
                   
                 
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;