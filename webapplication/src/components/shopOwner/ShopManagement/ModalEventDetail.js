import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Modal, Carousel } from 'react-bootstrap'
import {handleCheckToday} from '../../../constraints/HandleDate'
export default class ModalEventDetail extends Component {
    render() {
        var CheckDate =-1
        if (this.props.SentEvent) {
            var { title, allDay, start, end, images, totalFavorite, status, createdDate, decription, idShop } = this.props.SentEvent
            CheckDate = handleCheckToday (start, end)
            var statusEvent = '#FFCDD2'
            if (CheckDate === 0)
                statusEvent = '#C8E6C9'
            else if (CheckDate === 1)
                statusEvent = '#F0F4C3'
            }
        else {
            title = ''
            allDay = ''
            start = ''
            end = ''
            images = []
            totalFavorite = ''
            status = ''
            createdDate = ''
            decription = ''
        }
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Header style = {{backgroundColor: statusEvent}}>
                    <button type="button" class="close" onClick={this.props.turnOffModal}>&times;</button>
                    <center><h4 class="modal-title"><strong>{title}</strong></h4></center>
                </Modal.Header>
                <Modal.Body>
                    <td class="col-xd-2 col-md-4"><strong>Created Date:</strong></td>
                    <td class="col-xd-2 col-md-8">{createdDate}</td>
                    <td class="col-xd-2 col-md-4"><strong>Start Date:</strong></td>
                    <td class="col-xd-2 col-md-8">{start}</td><br />
                    <td class="col-xd-2 col-md-4"><strong>End Date:</strong></td>
                    <td class="col-xd-2 col-md-8">{end}</td><br />
                    <td class="col-xd-2 col-md-4"><strong>Total Favorites:</strong></td>
                    <td class="col-xd-2 col-md-8">{totalFavorite}</td><br />
                    <td class="col-xd-2 col-md-4"><strong>Description:</strong></td>
                    <td class="col-xd-2 col-md-8">{decription}</td>
                    <Carousel>
                        {images.map((item, index) => {
                            return (
                                <Carousel.Item>
                                    <img width={900} height={500} alt="900x500" src={item} />\
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Modal.Body>

                <Modal.Footer>
                    
                    <button 
                    onClick = {
                        ()=> {this.props._deleteEvent (idShop); this.props.turnOffModal()}}
                    style ={{display: CheckDate ===-1? 'none':''}}type="button" class="btn btn-danger">Delete this event</button>

                </Modal.Footer>
            </Modal>
        )
    }
}

