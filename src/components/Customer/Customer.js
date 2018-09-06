import React, { Component } from 'react'




class Customer extends Component {
  constructor() {
    super();

    this.state = {
      customer: {
        name: '',
        street_address: '',
        city: '',
        zip: '',
      },
      type: '',
    }

  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleRadioChange = () => {

  }



  handleSubmit = (event) => {
    this.props.history.push('/checkout');
  }








  render() {
    return (
      <div>
        <h1>Step 2: Customer Information</h1>

        <input type="text" onChange={this.handleChange} name="name" placeholder="Name" />
        <br />
        <input type="text" onChange={this.handleChange} name="street_address" placeholder="Street Address" />
        <br />
        <input type="text" onChange={this.handleChange} name="city" placeholder="City" />
        <br />
        <input type="number" onChange={this.handleChange} name="zip" placeholder="Zip Code" />


        <form onChange={this.handleChange}>
        <label>Pickup: </label>
          <input type="radio" onChange={this.handleRadioChange} value="Pickup" />
          <br/>
          <label>Delivery: </label>
          <input type="radio" onChange={this.handleRadioChange} value="Delivery" />

        </form>


        <br />
        <input type="submit" onSubmit={this.handleSubmit} value="NEXT"/>


      </div>
    )
  }
}


export default Customer;