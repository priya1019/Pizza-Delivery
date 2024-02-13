import React,{useState, useEffect} from 'react';
import {getAllOrder} from '../config/Myservice';
import {Container,Table} from 'react-bootstrap';
function Allorder() {
    let [orders,setOrders]=useState([]);
    useEffect(()=>{
        getAllOrder(sessionStorage.getItem('user'))
        .then(res=>{
            if(res.data.orders){
                setOrders(res.data.orders)
            }})
    })
    return (
        <>
          <Container>
              {/* <h4>All Orders</h4> */}
              <Table>
                  <thead>
                      <tr>
                          <th>Sr. No.</th>
                          <th>Item Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                      {orders.map((item,index)=>{return <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.checkout? 'Delivered':'Yet to be Delivered'}</td>
                      </tr>    
                      })}
                  </tbody>
              </Table>
          </Container>  
        </>
    )
}

export default Allorder
