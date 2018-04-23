import React, { Component, Fragment } from 'react';
import ModalChangeInformation from './ModalChangeInformation'
import ModalPayment from './ModalPayment'
import {Modal} from 'react-bootstrap'
export default class TableShopInformation extends Component {

    constructor (props){
        super (props)
        this.state = {
            isOpenModalDeleteShop : false
        }
    }
    
    _handleDeleteShop = async () =>{
        const {onSwitchWaitingModal, onDeleteShop, dataShopDetail} = this.props
        onSwitchWaitingModal();
        await onDeleteShop (dataShopDetail.store_Details.Store_ID)
        onSwitchWaitingModal();
    }
    render() {
        const { store_Details } = this.props.dataShopDetail
        var StoreCatalog_ID = 'Other'
        if (store_Details.StoreCatalog_ID === 1) {
            StoreCatalog_ID = "Food & Drink"
        }
        else if (store_Details.StoreCatalog_ID === 2) {
            StoreCatalog_ID = "Fashion"
        }
        else if (store_Details.StoreCatalog_ID === 3) {
            StoreCatalog_ID = "Entertainment Place"
        }
        var store_ActiveDays = store_Details.store_ActiveDays
        var openedDateArray = []
        if (store_ActiveDays.Monday === 1)
            openedDateArray.push(' Mon');
        if (store_ActiveDays.Tuesday === 1)
            openedDateArray.push(' Tue')
        if (store_ActiveDays.Wednesday === 1)
            openedDateArray.push(' Wed')
        if (store_ActiveDays.Thursday === 1)
            openedDateArray.push(' Thu')
        if (store_ActiveDays.Friday === 1)
            openedDateArray.push(' Fri')
        if (store_ActiveDays.Saturday === 1)
            openedDateArray.push(' Sat')
        if (store_ActiveDays.Sunday === 1)
            openedDateArray.push(' Sun')

        return (
            <Fragment>
                <h5><strong>Information of Shop</strong></h5>
                <Modal show = {this.state.isOpenModalDeleteShop}>
                    <Modal.Header style = {{backgroundColor:'red'}}>
                        <p style = {{fontSize:25}}><center><strong>DELETE SHOP</strong></center></p>
                    </Modal.Header>

                    <Modal.Body>
                        <p><strong>{`Do you want to delete shop ${store_Details.Store_Name} ?`}</strong></p>
                    </Modal.Body>

                    <Modal.Footer>
                        <button 
                            onClick = {()=> this.setState ({isOpenModalDeleteShop:false})} 
                            type="button" 
                            class="btn btn-default">Cancel</button>
                        <button
                            onClick = {()=> this._handleDeleteShop ()} 
                            type="button" 
                            class="btn btn-danger">Delete</button>
                    </Modal.Footer>
                </Modal>
                <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" href='#modal-ChangeInformation'>Change Information</button> &nbsp;
                <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" href='#modal-payment'>Payment</button>&nbsp;
                <button
                    onClick = {()=> this.setState ({isOpenModalDeleteShop:true})}  
                    type="button" class="btn btn-danger">Delete this shop</button>
                <br />
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="col-xd-2 col-md-4"><strong>Name of Shop:</strong></td>
                            <td class="col-xd-2 col-md-8">{store_Details.Store_Name}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-4"><strong>Average of Star Number:</strong></td>
                            <td class="col-xd-2 col-md-8">3.5 Stars</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-4"><strong>Number of Views (This month):</strong></td>
                            <td class="col-xd-2 col-md-8">35 Views</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Type of Shop:</strong></td>
                            <td class="col-xd-2 col-md-10">{StoreCatalog_ID}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Phone Number of Shop:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_PhoneNumber}</td>
                        </tr>
                        107
                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Open Time:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_OpenTime}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Close Time:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_CloseTime}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Open Day:</strong></td>
                            <td class="col-xd-2 col-md-10">{openedDateArray}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Street:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_Street}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Distict:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_District}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Price min:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_PriceMin}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Price max:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_PriceMax}</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Description:</strong></td>
                            <td class="col-xd-2 col-md-10">{store_Details.Store_Description}</td>
                        </tr>
                    </tbody>
                </table>
                <ModalChangeInformation />
                <ModalPayment />
            </Fragment>
        )
    }
};
