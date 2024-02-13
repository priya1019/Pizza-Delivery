import React from 'react'
import {Container,Button,Alert} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../Component/logo1.jpg'
const Cart = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img src= {logo} height="70" width="70"/>  Pizza Delivery</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav float-right">
                <li class="nav-item ">
                    <a class="nav-link " href="#"><button className="btn btn-outline-dark my-2 my-sm-0 "> <Link to="/menu" style={{textDecoration:'none',color:'black'}}>Menu</Link></button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><button className="btn btn-outline-dark my-2 my-sm-0"><Link to="/cart" style={{textDecoration:'none',color:'black'}}>Cart </Link></button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><button className="btn btn-outline-dark my-2 my-sm-0"><Link to="/profile" style={{textDecoration:'none',color:'black'}}>Profile</Link></button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><button className="btn btn-outline-dark my-2 my-sm-0"><Link to="/" style={{textDecoration:'none',color:'black'}}>Logout</Link></button></a>
                </li>
                </ul>
            </div>
            </nav>
            <Container>
                <Container>
                    <h1>Order has been placed Successfully</h1>
                    <Alert varaint="success">You will  receive notification to email with order details</Alert>
                    <Button varaint="secondary" href="/menu">Go an order some other </Button>
                </Container>
            </Container>
        </div>
    )
}

export default Cart
