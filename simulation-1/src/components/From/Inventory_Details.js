import React, {Component} from 'react'
import axios from 'axios'

export default class InventoryList extends Component {
    constructor(props) {
        super()
        this.state = {
            shelfies: {},
            edit: false,
            imageUrlInput: '',
            productNameInput: '',
            priceInput: []
        }
    }
    componentDidMount() {
        let {id} = this.props.match.params
        axios.get(`/api/inventory_list/${id}`).then( response => {
            let shelfies = response.data[0]
            this.setState({
                Shelfie: {},
                edit: 'false',
                ImageUrlInput: '',
                ProductNameInput: '',
                priceInput: ''
            })
        })
    }

    changeEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleImageUrlChange = (e) => {
        this.setState({
            imageUrlInput: e.target.value
        })
    }

    handleProductNameChange = (e) => {
        this.setState({
            productNameInput: e.target.value
        })
    }

    handlePriceChange = (e) => {
        this.setState({
            priceInput: e.target.value
        })
    }

    saveChanges = () => {
        let {imageUrlInput, productNameInput, priceInput} = this.state
        let {id} = this.state.Inventory
        let newShelfieValues = {
            imageUrl: imageUrlInput,
            productName: productNameInput,
            price: priceInput
        }
        axios.put(`/api/product/${id}`, newShelfieValues).then( response => {
            let {id} = response.data[0]
            this.setState({
                edit: false,
                shelfie
            })
        })
    }

    delete = () => {
        let {id} = this.state.inventory 
        axios.delete(`/api/inventory/${id}`).then( response => {
            this.props.history.push('/inventory')
        })
    }

    render() {
        let {edit, imageUrlInput, productNameInput, priceInput} = this.state
        let {imageUrl, productName, price} = this.state.inventory
        return (
            <div className="inventory-detail-main-container">
            {
                edit 
                ?
                <div className="inventory-detail-container">
                    <span>ImageUrl:</span> <input value={imageUrlInput} onChange={this.handleimageUrlChange}/>
                    <span>ProductName:</span> <input value={productNameInput} onChange={this.handleproductNameChange}/>
                    <span>Price:</span> <input value={priceInput} onChange={this.handlePriceChange}/>
                    <button onClick={this.saveChanges}>Add Inventory</button>
                </div>
                :
                <div className="inventory-detail-container">
                    <h4>{imageUrl}</h4>
                    <p>{productName}</p>
                    <p>{price}</p>
                    <div>
                        <button onClick={this.addInventory}>Add Inventory</button>
                        <button onClick={this.cancel}>Cancel</button>
                    </div>
                </div>
            }
            </div>
        )
    }
}