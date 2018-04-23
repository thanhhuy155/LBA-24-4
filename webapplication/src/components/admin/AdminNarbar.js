import React, { Component } from 'react';
import './adminstyle.css'
import { Link } from 'react-router-dom'
export default class AdminNarbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar1 navbar-default1">
                    <div className="container">
                        <div className="navbar-header">

                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav" >
                                <li>
                                    <Link to="/a"><a style={{
                                        color: 'white'
                                    }}>Dashboard</a>
                                    </Link></li>
                                <li><Link to= "/a/customer">Customer</Link></li>
                                <li ><Link to= "/a/shopowner" >Shop's Owner</Link></li>
                                <li><a >Statistics</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right" >
                                <li><a>Welcome, Harrison</a></li>
                                <li>
                                        <a style={{
                                            color: 'white'
                                        }} role = "button" onClick = {()=> this.props.onLogout()}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};
