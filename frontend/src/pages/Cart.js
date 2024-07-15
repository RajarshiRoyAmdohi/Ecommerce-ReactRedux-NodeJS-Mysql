import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import '../App.css';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <div>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;