import React, { Component, Fragment } from 'react';
import ModalCreateEvent from './ModalCreateEvent'
export default class EventInformation extends Component {

    constructor (props)
    {
        super (props)
        this.state = {
            isOpen:false
        }
    }
    _switchModal = () =>{
        this.setState ({isOpen:!this.state.isOpen})
    }
    
    render() {
        const {dataEventStatistics, onCreateEvent, resultFromCreatingEvent, dataShopDetail, onSwitchWaitingModal} = this.props
        return (
            <Fragment>
                <div>

                    <table class="table">
                            <tbody>
                                <tr>
                                    <td class="col-xd-2 col-scol-md-2"><strong>Name of Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">{dataEventStatistics.numberOfPromoton}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Number of Operated Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">{dataEventStatistics.numberOfProgressingPromoton}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Number of Closed Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">{dataEventStatistics.numberOfClosedPromoton}</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Number of Future Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">{dataEventStatistics.numberOfFuturePromoton}</td>
                                </tr>
                            </tbody>

                        </table>

                </div>


                <div class="row">
                    <button onClick ={()=> this._switchModal ()}type="button" class="btn btn-success" data-toggle="modal" href='#modal-CreateEvent'>Create Event</button>
                    <ModalCreateEvent
                        switchModal = {this._switchModal} 
                        isOpen = {this.state.isOpen}
                        onCreateEvent = {onCreateEvent}
                        resultFromCreatingEvent = {resultFromCreatingEvent}
                        dataShopDetail = {dataShopDetail}
                        onSwitchWaitingModal = {onSwitchWaitingModal}
                    />
                </div>

            </Fragment>

        )
    }
};
