import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import TicketDashboard from '../tickets/TicketDashboard';
import AdminDashboard from '../admin/AdminDashboard';
import { Redirect } from 'react-router-dom';
import { getPermissions} from '../../store/actions/authActions'


class Dashboard extends Component {
    componentWillMount() {
        if(this.props.auth.uid){
            this.props.getPermissions();
        }
    }
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

const mapDispatchToProps = (dispatch) => {
    return {
        getPermissions: () => dispatch(getPermissions()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);