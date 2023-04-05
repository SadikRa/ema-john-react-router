import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItmes from '../ReviewItmes/ReviewItmes';
import './order.css'
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const cartProducts = useLoaderData()
    const [cart, setCart] = useState(cartProducts)
    const hendleRemoveFromCart = (id) =>{
           const remiang = cart.filter(product => product.id !== id)
           setCart(remiang)
           removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItmes
                        product={product}
                    key={product.id}
                    hendleRemoveFromCart={hendleRemoveFromCart}
                    ></ReviewItmes>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={(cart)}></Cart>
            </div>
        </div>
    );
};

export default Orders;