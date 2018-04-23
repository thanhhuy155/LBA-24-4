import React, { Component } from 'react';
import LoadedImage from './LoadedImage'
export default class ModalChangeInformation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageArray: [
                { file: '', imagePreviewUrl: 'http://giaiphaptinhhoa.com/wp-content/uploads/2012/11/Blue.jpg' }
            ]
        }
    }

    _closeImage = (imagePreviewUrl) => {
        const { imageArray } = this.state
        this.setState({
            imageArray: imageArray.length === 1 ? imageArray : imageArray.filter((item) => item.imagePreviewUrl !== imagePreviewUrl)
        })
    }

    _checkImage = (imagePreviewUrl) => {
        const { imageArray } = this.state
        var check = false
        for (let i = 0; i < imageArray.length; i++) {
            if (imageArray[i].imagePreviewUrl === imagePreviewUrl) {
                check = true
                break
            }
            else {
                check = false
            }
        }
        return check
    }
    _handleImageChange = (e) => {
        e.preventDefault();
        try {
            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                this.setState({
                    imageArray: !this._checkImage(reader.result) ? this.state.imageArray.concat({ file: file, imagePreviewUrl: reader.result }) : this.state.imageArray
                    // file: file,
                    // imagePreviewUrl: reader.result
                });
            }
            reader.readAsDataURL(file)
        } catch (e) { console.log(e) }
    }

    render() {
        const { imageArray } = this.state
        return (
            <div class="modal fade" id="modal-ChangeInformation">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style={{ backgroundColor: 'lightBlue' }}>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <center><h4 class="modal-title"><strong>Change Infortion</strong></h4></center>
                        </div>
                        <div class="modal-body">

                            <form action="" method="POST" role="form" >
                                <div class="form-group">
                                    <label for=""><strong>Name of Shop: </strong></label>
                                    <input type="text" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Type of Shop: </strong></label>
                                    <input type="text" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Phone Number of Shop: </strong></label>
                                    <input type="text" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Open Time: </strong></label>
                                    <input type="time" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Close Time: </strong></label>
                                    <input type="time" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Street: </strong></label>
                                    <input type="text" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Distict: </strong></label>
                                    <input type="text" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Price min: </strong></label>
                                    <input type="text" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Price max: </strong></label>
                                    <input type="text" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Description max: </strong></label>
                                    <textarea rows={3} class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for=""><strong>Images of Shop: </strong></label>
                                    <div class="row">

                                        <div 
                                            class="col-xs-6 col-sm-2 col-ld-2"
                                            style = {{
                                                textAlign: 'center',
                                                display: imageArray.length === 5 ? 'none': ''}}
                                        >
                                            <div class="input-file-container">
                                                <input
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    onChange={(e) => this._handleImageChange(e)}
                                                    class="input-file" id="my-file" type="file" />

                                                <label
                                                    style={{
                                                        display: 'block',
                                                        background: '#39D2B4',
                                                        color: '#fff',
                                                        fontSize: 45,
                                                        cursor: 'pointer',
                                                        width: 60,
                                                        height: 60,

                                                    }}
                                                    tabindex="0"
                                                    for="my-file"
                                                    class="input-file-trigger">+</label>
                                            </div>
                                        </div>

                                        {
                                            imageArray.map((item, index) => {
                                                return (
                                                    <LoadedImage
                                                        _closeImage={this._closeImage}
                                                        file={item.file}
                                                        imagePreviewUrl={item.imagePreviewUrl} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};
