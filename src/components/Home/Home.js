import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import './Home.css';

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
  getPizzas() {
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
            return <img src="images/pizza_photo.png" alt="pizza" />
          })}
          <br /> <button>Add</button>
          <button>Remove</button>
        </div>
        <button className="next">Next</button>
      </div>

    )
  }
} // end Component

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(Home);