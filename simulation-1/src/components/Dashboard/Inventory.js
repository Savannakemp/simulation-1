import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function inventory(props) {
    let {imageUrl, productName, price = props}
    return (
        <div className="inventory-main-container">
            <image>{imageUrl}</image>
            <p>{productName}</p>
            <p>{price}</p>
            <Link to={`/${addToInventory}`}><button>AddToInventory</button></Link>
            <Link to={`/${cancel}`}><button>Cancel</button></Link>
        </div>
    )
}