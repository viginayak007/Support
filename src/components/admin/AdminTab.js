import React from 'react';
import { Link } from 'react-router-dom';

const AdminTab = (props) => {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <Link className={ "nav-link " + (props.path === "/dashboard/admin/users" ?"active" : "") } to="/dashboard/admin/users">Users</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (props.path === "/dashboard/admin/groups" ? "active" : "")} to="/dashboard/admin/groups">Groups</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (props.path === "/dashboard/admin/orginization" ? "active" : "")} to="/dashboard/admin/orginization">Orginization</Link>
            </li>
        </ul>
    )
}

export default AdminTab;