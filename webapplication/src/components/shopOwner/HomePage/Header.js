import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav class="navbar navbar-default" role="navigation" style={{ marginBottom: 0, backgroundColor:'black'}}>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">LBA for Shop Owner</a>
                    </div>

                    <div class="collapse navbar-collapse navbar-ex1-collapse">

                        <ul class="nav navbar-nav navbar-right">
                            <li><Link to='/s/ContactUsPage'>
                                <span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>
                                &nbsp;<strong>Contact Us</strong></Link></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="	glyphicon glyphicon-user" aria-hidden="true"></span> &nbsp;
                                    <strong>{`Welcome ${JSON.parse (localStorage.getItem ('User')).data.store_Owners_Details1.Owner_LastName}`} </strong><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/s/ProfilePage">
                                        <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                        &nbsp;<strong>Profile</strong></Link></li>
                                    <li><a href="#">
                                        <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                                        &nbsp;<strong>Setting</strong></a></li>
                                    <li class="divider"></li>
                                    <li><a role= "button" onClick= {()=>this.props.onLogout()}>
                                        <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                                        &nbsp;<strong>Logout</strong></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
};
