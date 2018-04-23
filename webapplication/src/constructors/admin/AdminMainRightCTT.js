import React, { Component } from 'react';
import AdminLeftSizebar from '../../components/admin/AdminLeftSizebar';
import AdminContainDashBoard from '../../components/admin/AdminContainDashBoard';
import AdminContain from '../../components/admin/AdminContain';
import { connect } from 'react-redux'
import '../../components/admin/adminstyle.css'
class AdminMainRightCTT extends Component {
    render() {
        return (
                <AdminContainDashBoard />
        )
    }
};
const mapStyleToProps = (state) => {
    return {
    }
}
export default connect(mapStyleToProps, null)(AdminMainRightCTT)
