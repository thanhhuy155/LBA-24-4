import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableOfEvents from '../../../components/shopOwner/Staristics/TableOfEvents'
import {actHandleGetEventsList} from '../../../actions/EventManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
import {actHandleDeleteEvent} from '../../../actions/EventManagementAction'
class TableOfEventsCTT extends Component {
    componentWillMount (){
        this.props.onGetEventsList (this.props.dataShop.data.store_Details.Store_ID)
    }

    render() {
        const {dataEventsList, onDeleteEvent, onSwitchWaitingModal} = this.props
        if (dataEventsList)
        {
            if (dataEventsList.message.success)
                return (
                    <TableOfEvents
                        dataEventsList = {dataEventsList}
                        onDeleteEvent ={onDeleteEvent}
                        onSwitchWaitingModal = {onSwitchWaitingModal}
                    />
                )
            else 
                return (
                    <p>Something was wrong</p>
                )
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
        onGetEventsList:  (id) => {
            dispatch (actHandleGetEventsList(id))
        },
        onDeleteEvent:  async (idShop) => {
            await dispatch (actHandleDeleteEvent(idShop))
        },
        onSwitchWaitingModal:  () => {
            dispatch (actSwitchWattingModal())
        }
    }
}
export default connect (mapStyleToProps,mapDispatchToProps) (TableOfEventsCTT)
