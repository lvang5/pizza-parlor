import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Customer.css'

//COMPONENT 
class Customer extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      street_address: '',
      city: '',
      zip: '',
      type: '',
    }

  }


  //INPUT FUNCTION 
  //STORES INFORMATION
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  



  //RADIO BUTTON FUNCTION
  //IF ELSE STATEMENT THAT TOGGLES DELIVERY STATUS
  handleRadioChange = (event) => {
    if (event.target.type === 'delivery') {
      this.setState({
        type: 'delivery'
      })
    } else {
      this.setState({
        type: 'pickup'
      })

    }


  }

  //SUBMIT FUNCTION
  //CONTAINS -- URL towards checkout page
  //
  handleSubmit = () => {
    console.log('asdf');
    const result = this.state
    const action = { type: 'ADD_ITEM', payload: result }
    this.props.dispatch(action);
    this.props.history.push('/checkout');

  }







  //POSTS ON TO DOM 
  render() {

    //First part: INPUT FORM
    //Second part: BUtton form 
    return (
      <div>

        
          <h1 className="titleForm" >Step 2: Customer Information</h1>

        <br/>


          <input className="titleForm" type="text" onChange={this.handleChange} name="name" placeholder="Name" />
          <br />
          <input className="titleForm" type="text" onChange={this.handleChange} name="street_address" placeholder="Street Address" />
          <br />
          <input className="titleForm" type="text" onChange={this.handleChange} name="city" placeholder="City" />
          <br />
          <input className="titleForm" type="number" onChange={this.handleChange} name="zip" placeholder="Zip Code" />
        



        <form onChange={this.handleChange}>
          <input type="radio" onChange={this.handleRadioChange} name="type" value="pickup" />
          Pickup
          <br />
          <input type="radio" onChange={this.handleRadioChange} name="type" value="delivery" />
          Delivery
        </form>


        <br />
        <input className="nextButton" type="submit" onClick={this.handleSubmit} value="NEXT" />


      </div>
    )
  }
}


export default connect()(Customer);