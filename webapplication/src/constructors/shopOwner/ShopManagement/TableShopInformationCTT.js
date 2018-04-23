import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableShopInformation from '../../../components/shopOwner/ShopManagement/TableShopInformation'
import {actHandleDeleteShop} from '../../../actions/ShopManagementAction'
import {actSwitchWattingModal} from '../../../actions/MainAction'
class TableShopInformationCTT extends Component {
  render() {
    const {dataShopDetail, sortType, onDeleteShop, onSwitchWaitingModal} = this.props
    if (dataShopDetail)
    {
      if (dataShopDetail.data)
        return (
          <TableShopInformation 
            dataShopDetail = {dataShopDetail.data} 
            sortType ={sortType}
            onDeleteShop = {onDeleteShop}
            onSwitchWaitingModal = {onSwitchWaitingModal}
            />
        )
      else {
        return (
          <p>Your shop is not exists</p>
        )
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
    dataShopDetail: state.handleGetShopDetail
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteShop: async (idShop) => {
      await dispatch(actHandleDeleteShop(idShop))        
    },
    onSwitchWaitingModal:  () => {
      dispatch (actSwitchWattingModal())
   }
  }
}

export default connect (mapStyleToProps,mapDispatchToProps) (TableShopInformationCTT)
