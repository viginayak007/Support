import React, { Component } from 'react';
import OrganizationInfoPanel from './OrganizationInfoPanel';
import { getOrganizations } from './../../../store/actions/adminActions'; 
import { connect } from 'react-redux';

class Organizations extends Component {
    componentWillMount() {
        this.props.getOrganizations();
    }
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                    < OrganizationInfoPanel />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                    {/* <Route path="/dashboard/tickets" component={Tickets} /> */}
                </div>
            </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        admin: state.admin.organizations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrganizations: () => dispatch(getOrganizations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organizations);