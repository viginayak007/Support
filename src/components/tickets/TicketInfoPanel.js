import React from 'react';
// import { Link } from 'react-router-dom';

// import NewTicket from './NewTicket';

const TicketBreadcrumb = (props) => {
    return (
        <div className="container">
            <button type="button" className="btn pull-right btn-info btn-sm" data-toggle="modal" data-target="#NewTicket">
                New
            </button>
        </div>
    )
}

export default TicketBreadcrumb;