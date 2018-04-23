import React, { Component, Fragment } from 'react';
import {handleSplitDate, handleCheckToday} from '../../../constraints/HandleDate'
import ModalEventDetail from '../ShopManagement/ModalEventDetail'
export default class EventItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            SentEvent: null,
            isOpen: false
        }
    }

    _retriveDate = (DateData) =>{
        const result = DateData.split ('T');
        return result [0]
    }

    _openModalEventDetail = (SentEvent) => {
        this.setState({ SentEvent: SentEvent, isOpen: true })
    }

    _turnOffModalEventDetail = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const {Promotion_ID,Promotion_Title, Promotion_DateStart,Promotion_DateEnd, Promotion_Status, Promotion_Created, Promotion_TotalFavorite, Promotion_Image, Promotion_Description } = this.props.dataEvent
        var objectModal = {
            idShop: Promotion_ID,
            title: Promotion_Title,
            allDay: true,
            start: handleSplitDate(Promotion_DateStart),
            end: handleSplitDate(Promotion_DateEnd),
            images: Promotion_Image.split(','),
            totalFavorite: Promotion_TotalFavorite,
            status: Promotion_Status,
            createdDate: handleSplitDate(Promotion_Created),
            decription: Promotion_Description
        }
        const StartedDate =  handleSplitDate (Promotion_DateStart)
        const EndDate = handleSplitDate (Promotion_DateEnd)
        const CheckDate = handleCheckToday (StartedDate, EndDate)
        var statusEvent = '#FFCDD2'
            if (CheckDate === 0)
                statusEvent = '#C8E6C9'
            else if (CheckDate === 1)
                statusEvent = '#F0F4C3'
        return (
            <Fragment>
                <ModalEventDetail
                    _deleteEvent = {this.props._deleteEvent}
                    SentEvent={this.state.SentEvent}
                    isOpen={this.state.isOpen}
                    turnOffModal={this._turnOffModalEventDetail}
                />
                <tr style= {{backgroundColor:statusEvent}} onClick = {()=> this._openModalEventDetail(objectModal)}>
                    <td>{Promotion_Title}</td>
                    <td>{handleSplitDate(Promotion_Created)}</td>
                    <td>{StartedDate}</td>
                    <td>{EndDate}</td>
                    <td>{Promotion_TotalFavorite}</td>
                </tr>
            </Fragment>
        )
    }
};
