import axios from 'axios';
import { MAIN_URL } from './Url';
let token=localStorage.getItem('_token');
export function registerUser(data){
    return axios.post(`${MAIN_URL}menus/register`,data);
}
export function loginUser(data){
    return axios.post(`${MAIN_URL}menus/login`,data);
}
export function getProducts(){
    return axios.get(`${MAIN_URL}menus/products`,{
        headers:{"Authorization":`Bearer ${token}`}
    });
}
export function cartAdd(item,email){
    return axios.get(`${MAIN_URL}menus/cart/${item.pname}/${item.price}/${email}`);
}
export function getOrder(email){
    return axios.get(`${MAIN_URL}menus/orders/${email}`);
}
export function deleteorder(id){
    return axios.delete(`${MAIN_URL}menus/deleteorder/${id}`);
}
export function checkout_order(email){
    return axios.get(`${MAIN_URL}menus/checkout/${email}`);
}
export function getAllOrder(email){
    return axios.get(`${MAIN_URL}menus/allorders/${email}`);
}
export function getProfile(email){
    return axios.get(`${MAIN_URL}menus/profile/${email}`);
}
export function updProfile(id, data){
    return axios.put(`${MAIN_URL}menus/updprofile/${id}`,data);
}