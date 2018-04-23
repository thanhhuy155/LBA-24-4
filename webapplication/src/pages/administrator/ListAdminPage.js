import React, { Component } from 'react';
import AdminListAdminCTT from '../../constructors/admin/AdminListAdminCTT';
import SearchbarCTT from '../../constructors/admin/Accounts/SearchbarCTT';

import AdminData from '../../components/admin/Accounts/AccountData/AdminData';
import AdminAccounts from '../../components/admin/Accounts/AccountList/AdminAccounts';
import axios from 'axios';
import '../../components/admin/adminstyle.css';
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
class ListAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
       console.log(this.componentDidMount);
       axios({
           method: 'GET',
           url: 'http://localhost:3000/products',
           data: null
       }).then(res => {
           console.log(res);
           this.setState({
               products: res.data
           });
       }).catch(err =>{
           console.log(err);
       })

    }
    // phuong thuc xoa san pham
    onDelete = (id) => {
        var { products } = this.state;
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/products/${id}`,
            data: null
        }).then(res => {
            // console.log(res);
            if (res.status === 200) { //Ok
                var index = this.findIndex(products, id);
                if (index !== -1)
                    products.splice(index, 1);
                this.setState({
                    products: products
                });
            }
        });
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index;
            }
        });
        return result;
    }


    render() {
        var { products } = this.state;
        // var {products } = this.props;
        return (<div className="container-fluid">
            <div class="col-md-9" >
                <SearchbarCTT/>
           
                <AdminAccounts>
                    {this.showProduct(products)}
                </AdminAccounts>
            </div>
            </div>
        )
    }
    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <AdminData
                        key={index}
                        product={product}
                        index={index}
                         onDelete = {this.onDelete} //khai bao them ham xoa
                    />
                )
            }
            )
        }
        return result;
    }
}
const mapSateToProps = state =>{
    return{
        products: state.products
    }
}

export default connect(mapSateToProps, null)(ListAdminPage);

