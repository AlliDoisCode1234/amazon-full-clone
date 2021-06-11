import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">{price}</p>
                <button className="checkoutProduct__button"></button>

            </div>
        </div>
    )
}

export default CheckoutProduct
