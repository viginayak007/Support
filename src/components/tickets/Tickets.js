import React, { Component } from 'react';
import { getTickets } from '../../store/actions/ticketActions';
import { connect } from 'react-redux';
// import { compose } from 'redux'
// import TicketTD from './TicketTD';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import moment from 'moment'


class Tickets extends Component {
    componentWillMount() {
        this.props.getTickets();
    }
    
    render() {
        const { tickets }  = this.props;
        const columns = [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                id: 'createdAt',
                Header: 'Date',
                accessor:  d => {
                    return moment(d.createdAt.nanoseconds).format("YYYY-MM-DD HH:mm:ss");
                  }
            },
            {
                Header: 'Organization',
                accessor: 'organization'
            },
            {
                Header: 'User',
                accessor: 'userId'
            },
            {
                Header: 'Type',
                accessor: 'id'
            },
            {
                Header: 'Subject',
                accessor: 'id'
            },
            {
                Header: 'Urgency',
                accessor: 'urgency'
            },
            {
                Header: 'Impact',
                accessor: 'impact'
            },
            {
                Header: 'Priority',
                accessor: 'priority'
            },
            {
                Header: 'Last Updated',
                accessor: 'id'
            },
            {
                Header: 'Status',
                accessor: 'status'
            },
        ]
        return (
            <div className="container">
            <div className="row">
                <div className="table-responsive">
                    <div id="tickets-table">
                        <ReactTable
                            data={tickets}
                            columns={columns}
                            defaultPageSize = {5}
                            pageSizeOptions = {[5,10,15, 20]}
                            className="-striped -highlight -btn-sm"
                            loading = {tickets.length ? false:true}
                            collapseOnPageChange = {true}
                            minRows = {true}
                        />
                    </div>
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