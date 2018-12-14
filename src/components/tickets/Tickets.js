import React, { Component } from 'react';
import { getTickets } from '../../store/actions/ticketActions';
import { connect } from 'react-redux';
// import { compose } from 'redux'
// import TicketTD from './TicketTD';
import moment from 'moment'


class Tickets extends Component {
    componentWillMount() {
        this.props.getTickets();
    }
    
    render() {
        const { tickets }  = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="table-responsive" id="tickets-table">
                        <table className="table table-hover table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Organization</th>
                                    <th>User</th>
                                    <th>Type</th>
                                    <th>Subject</th>
                                    <th>Urgency</th>
                                    <th>Impact</th>
                                    <th>Priority</th>
                                    <th>Last Updated</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tickets && tickets.map((ticket, i) => {
                                   return (
                                            <tr key={i}>
                                                <td>{ i }</td>
                                                <td>{ moment(ticket.createdAt.toDate()).calendar() }</td>
                                                <td>{ ticket.originzation }</td>
                                                <td>{ ticket.userId }</td>
                                                <td>{ }</td>
                                                <td>{ ticket.description }</td>
                                                <td>{ ticket.urgency }</td>
                                                <td>{ ticket.impact }</td>
                                                <td>{ ticket.priority }</td>
                                                <td></td>

                                            </tr>
                                    );
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        tickets: state.tickets.tickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: () => dispatch(getTickets())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tickets)