import React,{useState,useEffect} from 'react';
import{Container,Form,Button,Row,Col} from 'react-bootstrap';
import {getOrder,checkout_order} from '../config/Myservice';
import {useNavigate} from 'react-router-dom';
function Checkout() {
    const [cnumber,setCnumber]=useState(0);
    let[total,setTotal]=useState(0);
    const navigate=useNavigate();
    useEffect(()=>{
        getOrder(sessionStorage.getItem('user'))
        .then(res=>{
            const total=res.data.orders.reduce((prev,cur)=>prev + cur.price * cur.quantity,0)
            setTotal(total)
        })
    },[]);
    const checkout=()=>{
        checkout_order(sessionStorage.getItem('user'))
        .then(res=>{
            alert(res.data.msg)
            navigate('/order');
        })
    }
    return (
        <>
          <Container>
              <Container className="mt-3">
                  <h2>Check Out</h2>
                  <Form>
                      <Form.Group className="mb-3" as={Row}>
                          <Col sm={7}>
                              <Form.Control type="number" placeholder="Enter Credit Card Number" name="cnumber" onChange={(e)=>{setCnumber(e.target.value)}}/>
                              {cnumber!='' && cnumber.length<16 && <span className="text-danger">Enter Credit Card Number Correctly</span>}</Col>
                              <h4 className="mt-4">
                              Order Total : Rs. {total}
                              </h4>
                      </Form.Group>
                      <Button onClick={()=>checkout()}>Check Out</Button>
                  </Form>
              </Container>
          </Container>  
        </>
    )
}

export default Checkout
