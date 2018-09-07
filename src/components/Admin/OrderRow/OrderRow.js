import React, {Component } from 'react';

class OrderRow extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.order.customer.name}
                </td>
                <td>
                    {this.props.order.time}
                </td>
                <td>
                    {this.props.order.type}
                </td>
                <td>
                    {this.props.order.order_total}
                </td>
            </tr>
        )}

}

export default OrderRow;