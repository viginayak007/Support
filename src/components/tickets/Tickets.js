import React, { Component } from 'react';
import { getTest } from '../../store/actions/ticketActions';
import { connect } from 'react-redux';
// import { compose } from 'redux'


class Tickets extends Component {
    componentWillMount() {
        this.props.getTest();
    }
    state = {
        tickets: []
    }
    handleGetTickets = (e) => {
        this.props.getTest();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="table-responsive" id="tickets-table">
                        <table className="table table-hover table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Company</th>
                                    <th>Divison</th>
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
        tickets: state.ticket
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTest: () => dispatch(getTest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tickets)