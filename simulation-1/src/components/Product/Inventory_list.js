import React, { Component } from 'react'
import axios from 'axios'

export default class Inventory extends Component {
    constructor() {
        super()
        this.state = {
            Inventory: '',
            imageUrl: '',
            productName: '',
            price: ''
        }
    }
    componentDidMount() {
        axios.get('/api/inventory').then(response => {
            this.setState({
                inventory: response.data
            })
        })
    }

    handleChange = (val, key) => {
        let obj = {}
        obj[key] = val
        this.setState(obj)
    }

    addShelfie = () => {
        let { imageUrl, productName, price } = this.state
        axios.post('/api/inventory', { imageUrl, productName, price }).then(response => {
            this.setState({
                shelfies: response.data,
                imageUrl: '',
                productName: '',
                price: ''
            })
        })
    }

    render() {
        let { Inventory, imageUrl, productName, price } = this.state
        return (
            <div>
                <div className="inventory-main-container">
                    <div className="new-inventory-container">
                        <div>ImageUrl: <input value={imageUrl} onChange={(e) => this.handleImageUrlChange(e.target.value, 'imageUrl')} /></div>
                        <div>ProductName: <input value={productName} onChange={(e) => this.handleProductNameChange(e.target.value, 'productName')} /></div>
                        <div>Price: <input value={price} onChange={(e) => this.handleRatingChange(e.target.value, 'price')} /></div>
                        <div><button onClick={this.saveAddToInventory}>Add to Inventory</button></div>
                        <div><button onClick={this.addCancel}>Cancel</button></div>
                    </div>
                    {
                    inventory.map( (inventory) => {
                         return( 
                            <inventory>
                                imageUrl={inventory.imageUrl}
                                productName={inventory.productName}
                                pricing={inventory.pricing}
                            </inventory>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}







