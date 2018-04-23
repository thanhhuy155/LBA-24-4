import React, { Component } from 'react';

export default class BudgetManagementPage extends Component {
    render() {
        return (

            <div class="container-fluid">

                <div class="row">
                    <h4><strong>Payment History Table</strong></h4>
                    <table class="table table-hover table-striped">
                        <thead style={{ backgroundColor: '#80CBC4' }}>
                            <tr>
                                <th>Store</th>
                                <th>Address</th>
                                <th>Date Of Payment</th>
                                <th>Exipiry Date</th>
                                <th>Number of Day Left</th>
                                <th>Payment Methods</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Blues</td>
                                <td>143 Dong Da, Da Nang</td> 
                                <td>21-March-2017</td>
                                <td>21-March-2018</td>
                                <th>130 days</th>
                                <td>Credits Card</td>
                                <th>Expired</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        )
    }
};
