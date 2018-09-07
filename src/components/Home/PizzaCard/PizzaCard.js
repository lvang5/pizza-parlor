import React, { Component } from 'react'

class PizzaCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.pizza.image_path}/>
        <p><strong>{this.props.pizza.name}</strong></p>
        <p>{this.props.pizza.description}</p>
        <button>Add</button>
        <button>Remove</button>
      </div>
    )
  }
} // end Component

export default PizzaCard;