import React from 'react';
import './ReviewItmes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItmes = ({product, hendleRemoveFromCart}) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: $ <span className='price-color'>{price}</span></p>
                <p>quantity: <span className='price-color'>{quantity}</span></p>
            </div>
            <button onClick={() => hendleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delate-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItmes;