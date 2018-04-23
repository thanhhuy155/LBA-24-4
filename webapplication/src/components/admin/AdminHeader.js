import React, { Component, Fragment } from 'react';
import './adminstyle.css' 
import { Link } from 'react-router-dom';
import ModalChangePassAdmin from './Accounts/AccountData/ModalChangePassAdmin'
import ModalAddAdmin from './Accounts/AccountData/ModalAddAdmin'
export default class AdminHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenModalChangePassAdmin: false,
      isOpenModalAddAdmin: false,
    }
  }

  _OpenModal = () => {
    this.setState({ isOpenModalChangePassAdmin: true })
  }
  _OpenModalAddAdmin = () => {
    this.setState({ isOpenModalAddAdmin: true })
  }
  _CloseModal = () => {
    this.setState({ isOpenModalChangePassAdmin: false })
  }
  _CloseModalAddAdmin = () => {
    this.setState({ isOpenModalAddAdmin: false })
  }
  render() {
    return (
      <Fragment>
        <ModalChangePassAdmin switchClose={this._CloseModal} isOpen={this.state.isOpenModalChangePassAdmin} />
        <ModalAddAdmin switchClose={this._CloseModalAddAdmin} isOpen={this.state.isOpenModalAddAdmin} />
      <div class="row"> 
        <header id="header1">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1><span className="glyphicon glyphicon-cog" aria-hidden="true" /> LBA <small>Manage Admin Site</small></h1>
              </div>
              <div className="col-md-2">
                <div className="dropdown create">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Account Manage
                  <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a >Edit Infomation</a></li>
                      <li onClick={() => this._OpenModal()}><a  >Change Password</a></li>
                      <li onClick={() => this._OpenModalAddAdmin()}><a to="/w/Register" >Add Admin Account</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      </Fragment>
    )
  }
};
