import React, { useState } from 'react';
import logo from '../Component/logo1.jpg'
import { registerUser } from '../config/Myservice';
import { Link,useNavigate } from 'react-router-dom'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const SignUp = () => {
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    let [confpassword,setConfpassword]=useState('');
    let [name,setName]=useState('');
    const navigate=useNavigate();
    const register=()=>{
        let data={name:name,email:email,password:password,confpassword:confpassword};
        registerUser(data)
        .then(res=>{
            if(res.data.err){
                alert(res.data.err)
            }
            else{
                alert(res.data.msg)
                navigate('/login')
            }
        });
    }    
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
                    <a class="nav-link " href="#"><button className="btn btn-outline-dark my-2 my-sm-0 "> <Link to="/signup" style={{textDecoration:'none',color:'black'}}>Sign Up</Link></button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><button className="btn btn-outline-dark my-2 my-sm-0"><Link to="/login" style={{textDecoration:'none',color:'black'}}>Login</Link></button></a>
                </li>
                </ul>
            </div>
            </nav>
            <div className="container">
                <h1>Sign Up</h1>
            <form>
            <div class="form-group">
                    <label>Username : </label>
                    <input type="text" name="name" placeholder="Enter User Name" id="name" class="form-control" onChange={(e)=>{setName(e.target.value)}} required/>
                    {name!='' && name.length < 4 && <span className="text-danger">Improper Name </span>}
                </div>
                <div class="form-group">
                    <label>Email : </label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" class="form-control"  onChange={(e)=>{setEmail(e.target.value)}} required />
                    {email!='' && !regForEmail.test(email) && <span className="text-danger">Improper Email</span>}
                </div>
                <div class="form-group">
                    <label>Password : </label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" class="form-control"  onChange={(e)=>{setPassword(e.target.value)}} required/>
                    {password!='' && password.length < 8 && <span className="text-danger">Enter password  correctly</span>}
                </div>
                <div class="form-group">
                    <label>Confirm Password : </label>
                    <input type="password"placeholder="Enter ConfirmPassword" id="confPassword"  name="confPassword" class="form-control"  onChange={(e)=>{setConfpassword(e.target.value)}} required/>
                    {confpassword!='' && confpassword != password && <span className="text-danger">Passwords doesn't match</span>}
                </div>
                <br/>
                <button type="submit" class="btn btn-outline-dark my-2 my-sm-0" onClick={register}><Link to="/login">Sign Up</Link></button>
            </form>
            </div>
            </>
        )
    }
export default SignUp;