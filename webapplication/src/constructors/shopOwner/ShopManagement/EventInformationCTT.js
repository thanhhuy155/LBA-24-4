import React, { Component } from 'react';
import EventInformation from '../../../components/shopOwner/ShopManagement/EventInformation'
import {connect} from 'react-redux'
import {actHandleGetEventStaristic, actCreateEvent} from '../../../actions/EventManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class EventInformationCTT extends Component {

    componentWillMount (){
        this.props.onGetEventStatistic (this.props.dataShopDetail.data.store_Details.Store_ID);
    }
    render() {
        const {dataEventStatistics, onCreateEvent, resultFromCreatingEvent, dataShopDetail, onSwitchWaitingModal} = this.props;
        if (dataEventStatistics)
        {
            if (dataEventStatistics.message.success)
            {
                return (
                    <EventInformation
                        dataEventStatistics ={dataEventStatistics.data}
                        onCreateEvent = {onCreateEvent}
                        resultFromCreatingEvent = {resultFromCreatingEvent}
                        dataShopDetail = {dataShopDetail}
                        onSwitchWaitingModal = {onSwitchWaitingModal}
                    />
                )
            }
            else{
                return(
                    <p>{dataEventStatistics.message.error}</p>
                )
            }
        }
        else{
            return <p>Loading...</p>
        }
        
    }
};

const mapStyleToProps = (state) => {
    return {
      dataEventStatistics: state.handleGetEventStaristic,
      dataShopDetail: state.handleGetShopDetail,
      resultFromCreatingEvent: state.handleCreateEvent
    }
  }

  
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetEventStatistic: (idShop) => {
            dispatch(actHandleGetEventStaristic(idShop))        
        },
        onCreateEvent: async ( Store_Details_ID, Promotion_Title, Promotion_Description, Promotion_DateStart, Promotion_DateEnd, imageArray) =>{
            await dispatch ( actCreateEvent ( Store_Details_ID, Promotion_Title, Promotion_Description, Promotion_DateStart, Promotion_DateEnd, imageArray))
        },
        onSwitchWaitingModal:  () => {
            dispatch (actSwitchWattingModal())
        }
      
    }
}
export default connect (mapStyleToProps,mapDispatchToProps) (EventInformationCTT)
