import React, { Component,Fragment} from 'react';

export default class TableOfPaymentHistory extends Component {
  render() {
    return (
      <Fragment>
        <h4><strong>Payment History Table</strong></h4>
        <table class="table table-hover table-striped">
            <thead style= {{backgroundColor:'#80CBC4'}}>
                <tr>
                    <th>Date Of Payment</th>
                    <th>Exipiry Date</th>
                    <th>Payment Methods</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>21-March-2017</td>
                    <td>21-March-2018</td>
                    <td>Credits Card</td>
                    <th>Expired</th>
                </tr>
            </tbody>
        </table>
      </Fragment>
      
    )
  }
};
