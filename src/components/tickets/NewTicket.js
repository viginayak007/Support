import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux'; 
import { createTicket } from '../../store/actions/ticketActions';

class NewTicket extends Component {
    state = {
        urgency:3,
        impact:3,
        priority:5,
        originzation:1,
        location: 1,
        assign: 1,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleChangeParseInt = (e) => {
        this.setState({
            [e.target.id]: parseInt(e.target.value, 10)
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.createTest(this.state);
    }
    render() {
        const { firebase } = this.props
        return (
            <div className="modal" id="NewTicket">
                <div className="modal-dialog modal-lg">
                    <form className="modal-content" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Create New Ticket</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="user" className="col-form-label-sm">User</label>
                                        <input type="text" className="form-control form-control-sm" id="user" value ={ firebase.email } disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date" className="col-form-label-sm">Date</label>
                                        <input className="form-control form-control-sm" type="text" id="date" value={ new Date() } disabled/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status" className="col-form-label-sm">Status</label>
                                        <select className="form-control form-control-sm" id="status" value={this.state.status} readOnly>
                                            <option value="0">Open</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="urgency" className="col-form-label-sm">Urgency</label>
                                        <select className="form-control form-control-sm" id="urgency" value={this.state.urgency} onChange={ this.handleChangeParseInt }>
                                            <option value="1">1 -- High</option>
                                            <option value="2">2 -- Medium</option>
                                            <option value="3">3 -- Low</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="impact" className="col-form-label-sm">Impact</label>
                                        <select className="form-control form-control-sm" id="impact" value={this.state.impact} onChange={ this.handleChangeParseInt }>
                                            <option value="1">1 -- High</option>
                                            <option value="2">2 -- Medium</option>
                                            <option value="3">3 -- Low</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="priority" className="col-form-label-sm">Priority</label>
                                        <select className="form-control form-control-sm" id="priority" value={ (this.state.urgency + this.state.impact) - 1} readOnly>
                                            <option value="1">1 -- Critical</option>
                                            <option value="2">2 -- Important</option>
                                            <option value="3">3 -- Normal</option>
                                            <option value="4">4 -- Low</option>
                                            <option value="5">5 -- Planning</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="originzation" className="col-form-label-sm">Originzation</label>
                                        <select className="form-control form-control-sm" id="originzation" value={this.state.originzation} onChange={this.handleChangeParseInt} required>
                                            <option value="1">Company</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location" className="col-form-label-sm">Location</label>
                                        <select className="form-control form-control-sm" id="location" value={this.state.location} onChange={this.handleChangeParseInt} required>
                                            <option value="1">Mumbai</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Type</label>
                                        <select className="form-control form-control-sm" id="type" onChange={this.handleChangeParseInt} required>
                                            <option value="1">Service Request</option>
                                            <option value="2">Incident</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Approval</label>
                                        <select className="form-control form-control-sm" id="approval" value={this.state.approval} onChange={this.handleChangeParseInt}>
                                            <option value="0">Not Required</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Assign To</label>
                                        <select className="form-control form-control-sm" id="assign" value={this.state.assign} onChange={this.handleChangeParseInt} required>
                                            <option value="0">IT Department</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Application</label>
                                        <select className="form-control form-control-sm" id="application" value={this.state.application} onChange={this.handleChangeParseInt} required>
                                            <option>IT Department</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="description" className="col-form-label-sm">Subject</label>
                                        <textarea className="form-control form-control-sm" rows="2" id="subject" onChange={this.handleChange} required></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                            <label htmlFor="description" className="col-form-label-sm">Description</label>
                                            <textarea className="form-control form-control-sm" rows="20" id="description" onChange={this.handleChange} required></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <span className="btn btn-danger btn-circle">
                                <i className="fa fa-paperclip" aria-hidden="true"></i>
                            </span>
                            <button className="btn btn-info btn-sm">Create</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase.auth,
        permissions: state.auth.permissions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTicket: (ticket) => dispatch(createTicket(ticket))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewTicket));
