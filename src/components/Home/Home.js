import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    // this.state = {

    // }
  }

  componentDidMount() {
    this.getPizzas();
  }

  // axios GET all of the pizzas available for selection -- map over pizzas
  getPizzas() {
    console.log('in getPizzas')
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      const storedPizzas = response.data; // Array of pizza selections
      const action = { type: 'ADD_ORDER', payload: storedPizzas };
      this.props.dispatch(action);
      console.log(storedPizzas);
    })
  }
  

  render() {
    return (
      <div>
        <h3>Step 1: Select Your Pizza</h3>

        <div className = "card">
        <img src = "images/pizza_photo.png" alt="pizza"/>
        {this.props.reduxState.pizzas}
        <br /> <button>Add</button>
        <button>Remove</button>
        </div>

        <button className = "next">Next</button>


      </div>
    )
  }



} // end Component

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(Home);