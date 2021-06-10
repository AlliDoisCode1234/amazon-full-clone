import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating"></div>
            </div>
        </div>
    )
}

export default Product
