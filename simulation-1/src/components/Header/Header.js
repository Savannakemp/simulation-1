import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="header-main-container">
            <div className="inventory-list"><Link to="/">Inventory List</Link></div>
        </div>
    )
}