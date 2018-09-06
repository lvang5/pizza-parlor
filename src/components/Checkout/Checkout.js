import React, { Component } from 'react'
import CheckoutItem from './CheckoutItem/CheckoutItem.js';
import { connect } from 'react-redux';

const orderPh = [1, 2, 3];

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
        
    }


render() {
    return (
        <div>
            <h2>Step 3: Checkout</h2>
            <div>
                <ul>
                    <li>Name ph</li>
                    <li>Street ph</li>
                    <li>City zip ph</li>
                </ul>
                <h3>Type placeholder</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map over array of pizzas in customer's cart */}
                    {orderPh.map((item, index) => {
                        return (
                            <CheckoutItem key={index} item={item} />
                        )
                    })}
                </tbody>
            </table>
            <h1>Total:</h1>
            <button>Checkout</button>
        </div>
    )
}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Checkout);