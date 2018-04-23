import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import StoreEventPage from './StoreEventPage'
import StoreInformationPage from './StoreInformationPage'
import StorePaymentHistoryPage from './StorePaymentHistoryPage'
import ClientCommentPage from './ClientCommentPage'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../../styles/ShopOwnerStyles/StoreDetailPage.css'
import { actHandleGetShopDetail } from '../../../actions/ShopManagementAction'
import { connect } from 'react-redux'
class StoreDetailPage extends Component {

  componentWillMount() {
    this.props.onGetShopDetail(this.props.match.params.id)
  }
  render() {
    const { dataShopDetail } = this.props
    if (dataShopDetail) {
      if (dataShopDetail.message.success) {
        return (
          <div class="container-fluid">

            <div class="row">
              <h1>{dataShopDetail.data.store_Details.Store_Name}</h1>
              {dataShopDetail.data.store_Details.Store_Status === 0 ? (
                <h4><span class="label label-danger">Locked</span></h4>
              ) : (
                  <h4><span class="label label-success">Active</span></h4>
                )}


              <div class="btn-group-horizon">
                <Link style={{ backgroundColor: '#FFAB91' }} class="btn btn-default" to={`${this.props.match.url}`}>Shop Information</Link>
                <Link style={{ backgroundColor: '#DCEDC8' }} class="btn btn-default" to={`${this.props.match.url}/EventOfShop`}>Events of Shop</Link>
                <Link style={{ backgroundColor: '#B2DFDB' }} class="btn btn-default" to={`${this.props.match.url}/PaymentHistory`}>Payment History</Link>
                <Link style={{ backgroundColor: '#D7CCC8' }} class="btn btn-default" to={`${this.props.match.url}/ClientCommentPage`}>Client Comment</Link>
              </div>
            </div>

            <div class="row" style={{ marginTop: 20 }}>
              <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={2000}
                transitionEnter={false}
                transitionLeave={false}
              >
                <Switch>
                  <Route exact path={`${this.props.match.url}`} component={StoreInformationPage} />
                  <Route path={`${this.props.match.url}/EventOfShop`} component={StoreEventPage} />
                  <Route path={`${this.props.match.url}/PaymentHistory`} component={StorePaymentHistoryPage} />
                  <Route path={`${this.props.match.url}/ClientCommentPage`} component={ClientCommentPage} />
                </Switch>
              </ReactCSSTransitionGroup>
            </div>


          </div>

        )
      }
      else {
        return <p>{dataShopDetail.message.error}</p>
      }
    }
    else {
      return <div>Loading....</div>
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
    onGetShopDetail: async (id) => {
      dispatch(actHandleGetShopDetail(id))
    }
  }
}

export default connect(mapStyleToProps, mapDispatchToProps)(StoreDetailPage)