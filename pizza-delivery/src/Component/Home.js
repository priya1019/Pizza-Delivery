import React from 'react'
import logo from '../Component/logo1.jpg'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
       <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src= {logo} height="70" width="70"/>  Pizza Delivery</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item ">
                <a class="nav-link " ><button className="btn btn-outline-dark my-2 my-sm-0 "> <Link to="/signup" style={{textDecoration:'none',color:'black'}}>Sign Up</Link></button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" ><button className="btn btn-outline-dark my-2 my-sm-0"><Link to="/login" style={{textDecoration:'none',color:'black'}}>Login</Link></button></a>
            </li>
            </ul>
        </div>
        </nav><br/><br/><br/><br/><br/>
        <div class="card bg-light mx-auto" style={{width: 800}}>
        <div class="card-body">
            <h1 class="card-title">Pizza Delivery</h1>
            <p class="card-text">Welcome to Pizza delivery services.This is the place when you may chose the<br/>most delicious pizza you like from wide
             variety of options!</p><hr/>
             <p>We're performing delivery free of charge in case if your order is higher than 200Rs.</p>
            <Link to="/signup" class="btn btn-dark ">Sign In and Order</Link>
        </div>
        </div>

       </>
    )
}
