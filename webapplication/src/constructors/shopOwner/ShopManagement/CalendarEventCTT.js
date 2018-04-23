import React, { Component } from 'react';
import {connect} from 'react-redux'
import CalendarEvent from '../../../components/shopOwner/ShopManagement/CalendarEvent'
import {actHandleDeleteEvent} from '../../../actions/EventManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class CalendarEventCTT extends Component {

  render() {
    const {dataEventsList, dataShop, onDeleteEvent, onSwitchWaitingModal} = this.props
    if (dataEventsList)
    {
      if (dataEventsList.message.success)
        return (
          <CalendarEvent 
            dataEventsList = {dataEventsList.data.promotionsByIDStoreViewModel} 
            onDeleteEvent ={onDeleteEvent}
            onSwitchWaitingModal = {onSwitchWaitingModal}
            _reloadData ={this._reloadData}
            />
        )
      else {
        alert (dataEventsList.message.error)
        return 
           <p>No Data</p>
        }
    }
    else {
      return (
        <p>Loading...</p>
      )
    }
    
  }
};

const mapStyleToProps = (state) => {
  return {
    dataEventsList: state.handleGetEventsList,
    dataShop: state.handleGetShopDetail
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      onDeleteEvent:  async (idShop) => {
          await dispatch (actHandleDeleteEvent(idShop))
      },
      onSwitchWaitingModal:  () => {
        dispatch (actSwitchWattingModal())
     }
  }
}
export default connect (mapStyleToProps,mapDispatchToProps) (CalendarEventCTT)
