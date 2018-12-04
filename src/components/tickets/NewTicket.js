import React, { Component } from 'react';

class NewTicket extends Component {
    state = {

    }
    render() {
        return (
            <div className="modal" id="NewTicket">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Create New Ticket</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="id" className="col-form-label-sm">ID</label>
                                        <input type="text" className="form-control form-control-sm" id="id" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user" className="col-form-label-sm">User</label>
                                        <input type="text" className="form-control form-control-sm" id="user" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date" className="col-form-label-sm">Date</label>
                                        <input className="form-control form-control-sm" type="datetime-local" value="2011-08-19T13:45:00" id="date" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="urgency" className="col-form-label-sm">Urgency</label>
                                        <select className="form-control form-control-sm" id="urgency">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="impact" className="col-form-label-sm">Impact</label>
                                        <select className="form-control form-control-sm" id="impact">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="priority" className="col-form-label-sm">Priority</label>
                                        <select className="form-control form-control-sm" id="priority">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="company" className="col-form-label-sm">Company</label>
                                        <input type="text" className="form-control form-control-sm" id="company" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="division" className="col-form-label-sm">Division</label>
                                        <input type="text" className="form-control form-control-sm" id="division" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Type</label>
                                        <select className="form-control form-control-sm" id="type">
                                            <option>Service Request</option>
                                            <option>Incident</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="description" className="col-form-label-sm">Description</label>
                                        <textarea className="form-control form-control-sm" rows="20" id="description"></textarea>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <span className="btn btn-danger btn-circle">
                                <i className="fa fa-paperclip" aria-hidden="true"></i>
                            </span>
                            <button type="button" className="btn btn-info btn-sm" data-dismiss="modal">Create</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default NewTicket;