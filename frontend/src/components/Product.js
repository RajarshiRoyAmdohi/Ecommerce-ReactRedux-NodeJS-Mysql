import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import '../App.css';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setMessage('Item is been added sucessfully to cart!');
        setTimeout(() => {
            setMessage('');
        }, 3000); // Clear message after 3 seconds
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Product;
