import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

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
    axios({
      method: 'GET',
      url: '/'
    }).then((response) => {
      const pizzas = response.data; // Array of pizza selections
      const action = { type: 'ADD_ORDER', payload: pizzas };
      this.props.dispatch(action);
    })
  }
  // Reducer to track order add or remove 

  render() {
    return (
      <div>
        <h3>Step 1: Select Your Pizza</h3>

        <div className = "card">
        <img src = "images/pizza_photo.png"/>
        <br /> <button>Add</button>
        <button>Remove</button>
        </div>


      </div>
    )
  }



} // end Component

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(Home);