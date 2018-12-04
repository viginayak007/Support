import React from 'react';
import { Link } from 'react-router-dom';

const TicketTab = (props) => {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <Link className={"nav-link " + (props.path === "/dashboard/tickets" ? "active" : "")} to="/dashboard/tickets">Tickets</Link>
            </li>
        </ul>
    )
}

export default TicketTab;