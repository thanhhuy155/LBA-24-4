import React, { Component } from 'react';
import '../../components/admin/adminstyle.css'
export default class PromotionManagementPage extends Component {
    render() {
        return (
                <div class="col-md-9">
                    <div class="row">
                        <form action="" method="POST" role="form" class="form-inline" style={{ margin: '10px' }}>
                            <label>Sort by: </label>
                            <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                <option value="">------</option>
                                <option value="">Date Create</option>
                                <option value="">Catalog</option>
                            </select>
                        </form>
                    </div>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Promotion/Event List</h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr style={{ textAlign: 'center' }}>
                                        <th>ID</th>
                                        {/* <th>ID Shop</th> */}
                                        <th>Title</th>
                                        <th>Shop Owner</th>
                                        <th>Image</th>
                                        {/* <th>Phone Number</th>    */}
                                        <th>Day Start</th>
                                        <th>Date End</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sale Flower</td>
                                        <td> Flower Shop</td>
                                        <td> </td>
                                        <td>16-02-2018</td>
                                        <td>16-03-2018 </td>
                                        <td>
                                            <button type="button"
                                                className="btn btn-sm btn-primary  "
                                            // onClick={() => this.onDelete(product.id)}
                                            >Detail</button>
                                        <button type="button"
                                            className="btn btn-sm btn-danger  "
                                            // onClick={() => this.onDelete(product.id)}
                                            >Delete</button></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        )
    }
};
