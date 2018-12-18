import React, { Component } from 'react';
import AdminTab from './AdminTab';
import Users from './user/Users';
import Groups from './group/Groups';
import Organizations from './organization/Organizations';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

class AdminDashboard extends Component {
    render() {
        const path = this.props.history.location.pathname;
        if (this.props.history.location.pathname === '/dashboard/admin') return <Redirect to='/dashboard/admin/users' />;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <AdminTab path={ path }/>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <Route path="/dashboard/admin/users" component={Users} />
                        <Route path="/dashboard/admin/groups" component={Groups} /> 
                        <Route path="/dashboard/admin/organizations" component={Organizations} />     
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(AdminDashboard));