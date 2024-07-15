import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { clearCart } from '../redux/actions';
import '../App.css';

const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleCheckout = () => {
        axios.post('http://localhost:5000/checkout', { name, email, cart })
            .then(response => {
                alert('Order placed successfully');
                dispatch(clearCart());
            })
            .catch(error => {
                console.error('Error placing order:', error);
            });
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="button" onClick={handleCheckout}>Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
