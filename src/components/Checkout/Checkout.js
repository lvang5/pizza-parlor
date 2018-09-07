import React, { Component } from 'react'
import CheckoutItem from './CheckoutItem/CheckoutItem.js';
import { connect } from 'react-redux';
import axios from 'axios';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {
                customer: {
                    name: "Chris",
                    street_address: "123 street",
                    city: "Minneapolis",
                    zip: 55408
                },
                pizzas: [{
                    _id: "5afc94b8c62836fadd80496c", 
                    name: "Pepperoni",
                    description: "Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.",
                    cost: "14.99"
                    },
                    {
                    _id: "5afc94f3c62836fadd804979",
                    name: "Splat of Marinara",
                    description: "Cheeseless pizza with marinara, garlic and red peppers.",
                    cost: "12.99"
                    }],
                order_total: 27.98,
                type: "Pickup"
            }
        }
    }
    handleButtonClick = () => {
        this.sendOrderToMonGod();
    }

    sendOrderToMonGod = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: this.state.order
        }).then((response) =>{
            console.log(`This was ${response.data}, Congratulations, just like God on the seventh day, you may rest`);
            alert(`This was ${response.data}, Congratulations, just like God on the seventh day, you may rest whilst eating pizza`);
        }).catch((error)=>{
            console.log('Something terrible has happened; Mongod has perished. Please seek help and shelter for the end of the world', error);
            alert('An error has occurred. Please re-order your pizza')
        })
    }


render() {
    return (
        <div>
            <h2>Step 3: Checkout</h2>
            <div>
                <ul style={{listStylePosition: 'inside', listStyleType: 'none'}}>
                    <li>{this.state.order.customer.name}</li>
                    <li>{this.state.order.customer.street_address}</li>
                    <li>{this.state.order.customer.city} {this.state.order.customer.zip}</li>
                </ul>
                <h3>{this.state.order.type}</h3>
            </div>
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map over array of pizzas in customer's cart */}
                    {this.state.order.pizzas.map((item, index) => {
                        return (
                            <CheckoutItem key={index} item={item} />
                        )
                    })}
                </tbody>
            </table>
            <h1>Total: ${this.state.order.order_total}</h1>
            <button onClick={this.handleButtonClick}>Checkout</button>
        </div>
    )
}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Checkout);