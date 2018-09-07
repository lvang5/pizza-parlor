import React, { Component } from 'react'

class PizzaCard extends Component {
  handleAddClick = () =>{
    this.props.handleAddPizza(this.props.pizza)
    console.log();
  }

  handleDeleteClick = () => {
    this.props.handleRemovePizza(this.props.pizza)
  
    console.log('in handleDeleteClick');
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.pizza.image_path}/>
        <p><strong>{this.props.pizza.name}</strong></p>
        <p>{this.props.pizza.description}</p>
        <button className = "add" onClick={this.handleAddClick}>Add</button>
        <button className = "remove" onClick={this.handleDeleteClick}>Remove</button>
      </div>
    )
  }
} // end Component

export default PizzaCard;