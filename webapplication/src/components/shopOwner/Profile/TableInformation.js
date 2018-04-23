import React, { Component, Fragment } from 'react';
import ModalChangeInformation from './ModalChangeInformation'
export default class TableInformation extends Component {
    constructor (props){
        super (props)
        this.state= {
            isOpenModalChangeInformation: false
        }
    }

    _OpenModal = ()=>{
        this.setState ({isOpenModalChangeInformation:true})
    }
    _CloseModal = ()=>{
        this.setState ({isOpenModalChangeInformation:false})
    }
    render() {
        return (
            <Fragment>
                <ModalChangeInformation switchClose = {this._CloseModal} isOpen = {this.state.isOpenModalChangeInformation}/>
                <div class="row">
                    
                    <div class="col-xs-12 col-sm-12 col-md-3">
                        
                        <img src="https://vignette.wikia.nocookie.net/epic-rap-battles-of-cartoons/images/9/9f/Doraemon.png/revision/latest?cb=20161020103841" class="img-responsive" alt="Image"/>
                        
                    </div>


                    <div class="col-xs-12 col-sm-12 col-md-6">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>First Name:</strong></td>
                                    <td class="col-xd-2 col-md-8">Quang</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Last Name:</strong></td>
                                    <td class="col-xd-2 col-md-8">Vuong</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-4"><strong>Business Type:</strong></td>
                                    <td class="col-xd-2 col-md-8">Freelancer</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Day of birth:</strong></td>
                                    <td class="col-xd-2 col-md-10">28-Aug-1996</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Phone Number:</strong></td>
                                    <td class="col-xd-2 col-md-10">Gender</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Gender:</strong></td>
                                    <td class="col-xd-2 col-md-10">Male</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button onClick = {()=>this._OpenModal()}type="button" class="btn btn-success">Change Information</button>
            </Fragment>
        )
    }
};
