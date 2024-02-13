import React ,{useState, useEffect}  from 'react';
import { Container,Table,Button} from 'react-bootstrap';
import {getOrder, deleteorder} from '../config/Myservice';
import { useNavigate } from 'react-router';
function AddingCart() {
    let [orders,setOrders]=useState([]);
    let [total,setTotal]=useState(0);
    const navigate=useNavigate()
    useEffect(()=>{
        getOrder(sessionStorage.getItem('user'))
        .then(res=>{
            if(!res.data.msg){
                setOrders(res.data.orders)
                const total=res.data.orders.reduce((prev,cur)=>prev +(cur.price * cur.quantity),0)
                setTotal(total)
            }
        })
    },[]);
    const deleteord=(id)=>{
        deleteorder(id)
        .then(res=>{
            alert(res.data.msg)
            navigate("/cart");
        })
    }
    return (
        <>
            <Container className="mt-3">
                {/* <h3>Adding Cart</h3> */}
                {orders.length!==0 ? 
                <Table>
                    <tbody>
                        {orders.map(item=>
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td><Button type="submit" onClick={()=>deleteord(item._id)} >Delete</Button></td>
                            </tr>
                        )}
                        <tr>
                            <td colSpan="3">Rs{total}</td>
                            <td><Button href="/checkout">Check Out</Button></td>
                        </tr>
                    </tbody>
                </Table>:<h3 className="mt-5 bg-secondary p-2">Your Cart is Empty</h3>}               
            </Container>
        </>
    )
}
export default AddingCart