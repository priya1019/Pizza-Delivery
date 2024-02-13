import React, {useState,useEffect} from 'react'
import logo from '../Component/logo1.jpg'
import {Link} from 'react-router-dom'
import {getProfile} from '../config/Myservice';
import {Card, Container,Button} from 'react-bootstrap';
function Profile() {
    let [user,setUser]=useState([]);
    useEffect(()=>{
        getProfile(sessionStorage.getItem('user'))
        .then(res=>{
            if(res.data.user){
                console.log(res.data.user);
                setUser(res.data.user);
            }
        })
    },[])
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
                    <a class="nav-link" href="#"><button className="btn btn-outline-dark my-2 my-sm-0"><Link to="/cart" style={{textDecoration:'none',color:'black'}}>Cart <span> 0</span></Link></button></a>
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
                <Card  style={{width: 700}} className="m-5">
                <Card.Body>
                    <Card.Title><h2>{user.name}</h2></Card.Title>
                    <Card.Subtitle><h3>{user.email}</h3></Card.Subtitle>
                    <Button variant="primary" href="/upd_profile">Update profile</Button>
                </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default Profile