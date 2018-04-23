import React, { Component } from 'react';
import { checkOnlyLength, checkEndDate, checkStartDate } from '../../../constraints/InputValidation'
import LoadedImage from './LoadedImage'
import { Modal } from 'react-bootstrap'
export default class ModalCreateEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtStartDate: '',
            txtCloseDate: '',
            txtDescription: '',
            txtEventTitle: '',
            imageArray: [],
            formError: {
                txtEventTitle: '',
                txtStartDate: '',
                txtCloseDate: '',
                txtDescription: '',
            }
        }
    }

    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    _handleImageChange = (e) => {
        e.preventDefault();
        try {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
                this.setState({
                    imageArray: this.state.imageArray.concat({ file: file, imagePreviewUrl: reader.result })
                    // file: file,
                    // imagePreviewUrl: reader.result
                })
            }
            reader.readAsDataURL(file)
        } catch (e) { console.log(e) }
    }

    _handleSubmit = (e) => {


        const { txtStartDate, txtCloseDate, txtDescription, txtEventTitle, imageArray } = this.state
        const { onCreateEvent, resultFromCreatingEvent, onSwitchWaitingModal, dataShopDetail, switchModal } = this.props
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtStartDate: checkStartDate(txtStartDate),
                    txtCloseDate: checkEndDate(txtStartDate, txtCloseDate),
                    txtEventTitle: checkOnlyLength(txtEventTitle, 8),
                    txtDescription: checkOnlyLength(txtDescription),
                }
        },
            async () => {
                var formError = Object.values(this.state.formError)
                let isOkay = false
                for (let i = 0; i < formError.length; i++) {
                    if (formError[i] === '') {

                        isOkay = true
                    }
                    else {
                        isOkay = false
                        break
                    }
                }
                if (isOkay) {
                    onSwitchWaitingModal()
                    await onCreateEvent(
                        dataShopDetail.data.store_Details.Store_ID,
                        txtEventTitle,
                        txtDescription,
                        txtStartDate,
                        txtCloseDate,
                        imageArray,
                    )
                    this.setState ({
                        txtStartDate: '',
                        txtCloseDate: '',
                        txtDescription: '',
                        txtEventTitle: '',
                        imageArray: [],
                    }, ()=> {
                        window.location.reload()
                        switchModal();
                        onSwitchWaitingModal();
                    })
                }
            }
        )
    }

    _closeImage = (imagePreviewUrl) => {
        this.setState({
            imageArray: this.state.imageArray.filter((item) => item.imagePreviewUrl !== imagePreviewUrl)
        })
    }
    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Header style={{ backgroundColor: 'lightGreen' }}>
                    <button type="button" class="close" onClick={() => this.props.switchModal()}>&times;</button>
                    <center><h4 class="modal-title"><strong>Create a Event</strong></h4></center>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this._handleSubmit}>

                        <div class="form-group">
                            <label for="">Event Title: </label>
                            <input
                                onBlur ={()=> {this.setState ({
                                    formError: {
                                        ...this.state.formError,
                                        txtEventTitle: checkOnlyLength(this.state.txtEventTitle, 8),
                                    }
                                })}}
                                type="text"
                                class="form-control"
                                placeholder="Input field"
                                value={this.state.txtEventTitle}
                                onChange={this.handleChange}
                                name="txtEventTitle"
                            />
                            <p class={'text-danger'}>{this.state.formError.txtEventTitle}</p>
                        </div>

                        <div class="form-group">
                            <label for="">Start Date: </label>
                            <input
                                onBlur ={()=> {this.setState ({
                                    formError: {
                                        ...this.state.formError,
                                        txtStartDate: checkStartDate(this.state.txtStartDate),
                                    }
                                })}}
                                type="date"
                                class="form-control"
                                placeholder="Input field"
                                value={this.state.txtStartDate}
                                onChange={this.handleChange}
                                name="txtStartDate"
                            />
                            <p class={'text-danger'}>{this.state.formError.txtStartDate}</p>
                        </div>

                        <div class="form-group">
                            <label for="">Close Date: </label>
                            <input
                                onBlur ={()=> {this.setState ({
                                    formError: {
                                        ...this.state.formError,
                                        txtCloseDate: checkEndDate(this.state.txtStartDate, this.state.txtCloseDate),
                                    }
                                })}}
                                type="date"
                                class="form-control"
                                placeholder="Input field"
                                value={this.state.txtCloseDate}
                                onChange={this.handleChange}
                                name="txtCloseDate"
                            />
                            <p class={'text-danger'}>{this.state.formError.txtCloseDate}</p>
                        </div>

                        <div class="form-group">
                            <label for="">Description: </label>
                            <textarea
                                onBlur ={()=> {this.setState ({
                                    formError: {
                                        ...this.state.formError,
                                        txtDescription: checkOnlyLength(this.state.txtDescription),
                                    }
                                })}}
                                class="form-control"
                                rows="3"
                                placeholder="Input field"
                                value={this.state.txtDescription}
                                onChange={this.handleChange}
                                name="txtDescription"
                            />
                            <p class={'text-danger'}>{this.state.formError.txtDescription}</p>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlFile1">Choose Images</label>
                            <input
                                accept="image/*"
                                onChange={(e) => this._handleImageChange(e)}
                                type="file" class="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </form>

                    <div class="row">

                        {
                            this.state.imageArray.map((item, index) => {
                                return <LoadedImage
                                    _closeImage={this._closeImage}
                                    file={item.file}
                                    imagePreviewUrl={item.imagePreviewUrl} />
                            })
                        }
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={() => this.props.switchModal()} type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button onClick={() => this._handleSubmit()} type="button" class="btn btn-primary">Create</button>
                </Modal.Footer>

            </Modal>
        )
    }
};
