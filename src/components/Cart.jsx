import React from 'react'
import ProductCard from './ProductCard';
import { useState } from 'react';

const Cart = ({cartItems = []}) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Total items in cart: {cartItems.length}</p>
            {cartItems.map((product) => (
            
               <p key={product.id}>{product.name} is in your cart. </p>
            ))}
        </div>
    );
};

export default Cart;