import React, { Component } from 'react';
import OrderRow from './OrderRow/OrderRow.js';
import './Admin.css';
import axios from 'axios';

export default class Admin extends Component {
  //build our constructor and pass in props here
  //establish state
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
    }
  }
  //run initial data requests here
  componentDidMount(){
    this.getOrders();
  }
  //Make an array to get Orders from the database
  getOrders = () => {
    axios({
      method: 'GET',
      url: '/api/order',
    }).then((response) => {
      console.log(response.data);
      this.setState({
        orders: response.data
      })
    }).catch((error) => {
      alert('Orders couldn\'t be obtained');
    })
  }
  //make our masterpiece
  render() {
    return (
      <div>
        <h3>Administrative Data</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
            <tbody>
              {this.state.orders.map((order, i)=>{
                return(
                  <OrderRow key={i} order={order}/>
                );
              })}
            </tbody>
          
        </table>
        
      </div>
    )
  }
}
