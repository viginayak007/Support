import React, { Component } from 'react';

import TicketTab from './TicketTab';
import TicketInfoPanel from './TicketInfoPanel';
import Tickets from './Tickets';
// import NewTicket from './NewTicket';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class TicketDashboard extends Component {
    render() {
        const path = this.props.history.location.pathname;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <TicketTab path={ path }/>                 
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <TicketInfoPanel />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <Route path="/dashboard/tickets" component={Tickets} />
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

export default withRouter(connect(mapStateToProps)(TicketDashboard));