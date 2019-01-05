import React from 'react';
// import { Link } from 'react-router-dom';

import NewGroup from './NewGroup';

const GroupInfoPanel = (props) => {
    return (
        <div className="container">
            <button type="button" className="btn pull-right btn-info btn-sm" data-toggle="modal" data-target="#NewGroup">
                New
            </button>
            <div>
                <NewGroup />
            </div>
        </div>
                




                )
}

export default GroupInfoPanel;