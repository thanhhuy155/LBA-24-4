import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import wating from '../../images/wating.svg'
import background from '../../images/background.png'
export default class WaitingModal extends Component {
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.isOpenWattingModal}>
                    <Modal.Body>
                        <center>
                            <strong style={{ textAlign: 'center', fontSize: 20 }}>Watting a minute.... </strong>
                        </center>
                        
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
