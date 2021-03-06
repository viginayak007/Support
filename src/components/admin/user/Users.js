import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import UserInfoPanel from './UserInfoPanel';
import { connect } from 'react-redux';

class Users extends Component {
    render() {
        const path = this.props.history.location.pathname;
        if (path === '/dashboard/admin') return <Redirect to='/dashboard/admin/users' />;
        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                    <UserInfoPanel />
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
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(Users));