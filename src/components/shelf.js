import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props) {
        super(props);

        this.onAddItemToCart = this.onAddItemToCart.bind(this);
        this.onRemoveItemToCart = this.onRemoveItemToCart.bind(this);

        this.state = {
            shelfItems: [
                'shampoo',
                'chocolate',
                'yogurt'
            ]
        }
    }

    onAddItemToCart(item) {
        this.props.addItem(item);
    }

    onRemoveItemToCart(item) {
        this.props.removeItem(item);
    }

    render() {
        const shelfItems = this.state.shelfItems.map((item, idx) => {
            return <li key={idx}><button onClick={() => this.onAddItemToCart(item)}>[+]</button>{item}<button onClick={() => this.onRemoveItemToCart(item)}>[-]</button></li>
        });

        return (
            <div>
                <h2>Store Shelf:</h2>
                <ul>
                    {shelfItems}
                </ul>
            </div>
        );
    }
}

export default Shelf;