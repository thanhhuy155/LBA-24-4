import React, { Component } from 'react';
import '../../components/admin/adminstyle.css'
import CustomerListCTT from '../../constructors/admin/Accounts/CustomerListCTT';
export default class CustomerManagementPage extends Component {
    render() {
        return (
            <CustomerListCTT/>
        )
    }
};
