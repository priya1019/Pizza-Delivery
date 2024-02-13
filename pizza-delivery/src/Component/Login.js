import React, {useState} from 'react'
import logo from '../Component/logo1.jpg'
import {loginUser} from '../config/Myservice'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    const navigate =useNavigate();
    const login=()=>{
        let data = {email:email,password:password};
        loginUser(data)
        .then(res=>{
            if(res.data.err){
                alert(res.data.err)
            }
            else{
                alert(res.data.msg)
                console.log(res.data);
                localStorage.setItem("_token",res.data.token);
                sessionStorage.setItem("user",email);
                navigate('/menu')
            }
        });
    }
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src= {logo} height="70" width="70"/>  Pizza Delivery</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav float-right">
            <li class="nav-item ">
                <a class="nav-link " href="#"><button className="btn btn-outline-dark my-2 my-sm-0 "> <Link to="/signup" style={{textDecoration:'none',color:'black'}}>Sign Up</Link></button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button className="btn btn-outline-dark my-2 my-sm-0"><Link to="/login" style={{textDecoration:'none',color:'black'}}>Login</Link></button></a>
            </li>
            </ul>
        </div>
        </nav>
        <div class="container">
            <h1>Login</h1>
        <form>
            <div class="form-group">
                <label>Email : </label>
                <input type="email" placeholder="Enter Email" name="email" id="email" required class="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label>Password : </label>
                <input type="password" placeholder="Enter Password" name="password" id="password"  required  class="form-control"  onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <br/>
            <button type="submit" class="btn btn-outline-dark my-2 my-sm-0"  onClick={login}>Login</button>
        </form>
        </div>
        </div>
    )
}
export default Login;