import React from 'react';
// import { Link } from 'react-router-dom';

import NewOrganization from './NewOrganization';

const OrganizationInfoPanel = (props) => {
    return (
        <div className="container">
            <button type="button" className="btn pull-right btn-info btn-sm" data-toggle="modal" data-target="#NewOrganization">
                New
            </button>
            <div>
                <NewOrganization />
            </div>
        </div>
                




                )
}

export default OrganizationInfoPanel;