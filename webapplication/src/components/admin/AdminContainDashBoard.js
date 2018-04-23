import React, { Component } from 'react';
import './adminstyle.css';;
export default class AdminContainDashBoard extends Component {
    render() {
        return (
                <div class="col-md-9">
                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">LBA Overview</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-user" aria-hidden="true" /> 203</h2>
                                <h4>Users</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> 12</h2>
                                <h4>Total Shop</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> 33</h2>
                                <h4>Available Promotions</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-stats" aria-hidden="true" /> 12,334</h2>
                                <h3>Visitors</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Chart Analysis</h3>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>

        )
    }
};
