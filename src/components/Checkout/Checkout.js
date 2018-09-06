import React, { Component } from 'react'

export default class Checkout extends Component {
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
            </tbody>
        </table>
        <h1>Total:</h1>
      </div>
    )
  }
}
