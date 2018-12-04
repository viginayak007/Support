import React, { Component } from 'react';
import AdminTab from './AdminTab';
import Users from './Users';
import Groups from './Groups';
import Permissions from './Permissions';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

class AdminDashboard extends Component {
    render() {
        const path = this.props.history.location.pathname;
        if (this.props.history.location.pathname === '/admin') return <Redirect to='/admin/users' />;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <AdminTab path={ path }/>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <Route path="/dashboard/admin" component={Users} />
                        <Route path="/dashboard/admin/groups" component={Groups} /> 
                        <Route path="/dashboard/admin/permissions" component={Permissions} />     
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        tickets: state.ticket.tickets
    }
}

export default withRouter(connect(mapStateToProps)(AdminDashboard));