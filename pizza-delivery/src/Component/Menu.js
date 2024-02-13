import React,{useState, useEffect} from 'react'
import logo from '../Component/logo1.jpg'
import {Card, Button,Container,Col} from 'react-bootstrap';
import {useNavigate,Link} from 'react-router-dom'
import {getProducts,cartAdd} from '../config/Myservice';
import jwt_decode from 'jwt-decode';
export default function Menu() {
    const [uid,setUid]=useState('')
    let [products,setProducts]=useState([]);
    let [email,setEmail]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        if(sessionStorage.getItem('user')===undefined){
            navigate('/login')
        }
        if(localStorage.getItem('_token')!=undefined){
            let token=localStorage.getItem('_token');
            let deocde=jwt_decode(token);
            setEmail(sessionStorage.getItem('user'));
            getProducts()
            .then(res=>{
                console.log(res.data)
                if(res.data.err){
                    SubtleCrypto(res.data.err)
                }
                else{
                    setProducts(res.data.products);
                }
            })
        }
    },[])
    const addCart=(item)=>{
        window.location.reload();
        console.log(item)
        cartAdd(item,email)
        .then(res=>{
            alert(res.data.msg)
        })
    }
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
                <Container align="center">
                <h2>Menu</h2>
                </Container><br/>
                <div className="row p-4" style={{marginLeft:"60px"}}>
                {products.map(item=>
                <Col lg={4} key={item._id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${item.image}`} style={{height:'250px'}} alt={"images"}/>
                    <Card.Body>
                        <Card.Title >{item.name}</Card.Title>
                        <Card.Text>
                        Rs. {item.price}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{addCart(item)}}>Add to Cart</Button>
                    </Card.Body>
                </Card>
                </Col>
            )}
    </div>
    </Container>
        </div>
        
    )
}
