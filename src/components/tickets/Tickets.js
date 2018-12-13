import React, { Component } from 'react';
import { getTickets } from '../../store/actions/ticketActions';
import { connect } from 'react-redux';
// import { compose } from 'redux'
import TicketTD from './TicketTD';


class Tickets extends Component {
    componentWillMount() {
        this.props.getTickets();
    }
    
    render() {
        const { tickets }  = this.props;
        console.log() 
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
                                    <th>Description</th>
                                    <th>Urgency</th>
                                    <th>Impact</th>
                                    <th>Priority</th>
                                    <th>Last Updated</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tickets && tickets.map(ticket => {
                                    return (
                                        <TicketTD key={ticket.id} ticket={ticket}/>
                                    )
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
        tickets: state.ticket.tickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: () => dispatch(getTickets())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tickets)