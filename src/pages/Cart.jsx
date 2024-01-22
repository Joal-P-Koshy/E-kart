import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice';


function Cart() {

  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  let totalPrice = 0;
  cartItems?.forEach(item=>{
    totalPrice = totalPrice + item.price;
  });
  const navigate = useNavigate();
  const handleCheckout = ()=>{
    alert("Successfully placed");
    dispatch(emptyCart());
    navigate('/');
  }
  
  return (
    <>
      <button style={{ marginTop: "120px" }} className='btn btn-primary ms-5'>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
      </button>
      <div className='row w-100'>

        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.length > 0 ?
                  cartItems.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img src={item.thumbnail} height={"70px"} width={"80px"} style={{ borderRadius: '30%' }} /></td>
                      <td>{item.price} &#8377;</td>
                      <td>
                        <Button onClick={() => dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash "></i></Button>
                      </td>
                    </tr>
                  )) :
                  <p className='text-danger m-5'>No items in Cart</p>
              }
            </tbody>
          </table>
        </div>

        <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
          <div className="border shadow p-5">
            <h3 className="text-primary">Cart Summary</h3>
            <h5>Total no.of Products : <span className='fw-bolder text-warning ms-2'>{cartItems?.length}</span></h5>
            <h5>Total price : <span  className='fw-bolder text-warning ms-2'>{totalPrice}</span ></h5>
            <button className='btn btn-primary rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart