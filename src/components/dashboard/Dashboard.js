import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import TicketDashboard from '../tickets/TicketDashboard';
import AdminDashboard from '../admin/AdminDashboard';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
    render(){
        if (! this.props.auth.uid) return <Redirect to='/signin' />;
        if (this.props.history.location.pathname === '/dashboard') return <Redirect to='/dashboard/tickets'/>;
        return (
            <div>
                <Navbar />
                <Route path="/dashboard/tickets" component={TicketDashboard} />
                <Route path="/dashboard/admin" component={AdminDashboard} />   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Dashboard);