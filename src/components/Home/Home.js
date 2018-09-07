import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import './Home.css';
import PizzaCard from './PizzaCard/PizzaCard.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storedPizzas: [],
      pizzas: [],
    }
  }

  componentDidMount() {
    this.getPizzas();
  }

  handleAddPizza = (pizza) => {
    console.log(pizza)
    this.setState({
      pizzas: [...this.state.pizzas, pizza]
    })
  }

  handleRemovePizza = (pizzaToRemove) => {
    console.log(pizzaToRemove)
    this.setState({
      pizzas: this.state.pizzas.filter((pizza) => pizza._id !== pizzaToRemove._id )
    })
  }

  handleNextButtonClick = () => {
    console.log('Next button clicked')
    const action = {type: 'ADD_ORDER', payload: this.state.pizzas };
    this.props.dispatch(action);
    // this.props.history.push('customer');
  }

  // axios GET all of the pizzas available for selection -- map over pizzas
  getPizzas = () =>{
    console.log('in getPizzas')
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      this.setState({
        storedPizzas: response.data
      }); // Array of pizza selections
      const action = { type: 'ADD_ORDER', payload: this.state.storedPizzas };
      this.props.dispatch(action);
      console.log(this.state.storedPizzas);
    })
  }


  render() {
    return (
      <div className="card">
        <div>
          <h3>Step 1: Select Your Pizza</h3>
          {this.state.storedPizzas.map((pizza, i) => {
            return <PizzaCard key={i} pizza={pizza} handleAddPizza = {this.handleAddPizza} handleRemovePizza = {this.hanhandleRemovePizza}/>
          })}
          <br /> 
        </div>
        <button className="next" onClick={this.handleNextButtonClick}>Next</button>
      </div>

    )
  }
} // end Component

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(Home);