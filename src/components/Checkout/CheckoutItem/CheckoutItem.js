import React, { Component } from 'react'

class CheckoutItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.cost}</td>
      </tr>
    )
  }
}

export default CheckoutItem;