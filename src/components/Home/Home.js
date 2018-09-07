import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import './Home.css';
import PizzaCard from './PizzaCard/PizzaCard.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storedPizzas: []
    }
  }

  componentDidMount() {
    this.getPizzas();
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

  handleClick = () =>{
    console.log('Hello');
  }

  render() {
    return (
      <div className="card">
        <div>
          <h3>Step 1: Select Your Pizza</h3>
          {this.state.storedPizzas.map((pizza, i) => {
            return <PizzaCard key={i} pizza={pizza}/>
          })}
          <br /> 
        </div>
        <button className="next" onClick={this.handleClick}>Next</button>
      </div>

    )
  }
} // end Component

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(Home);