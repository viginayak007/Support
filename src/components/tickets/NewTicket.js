import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class NewTicket extends Component {
    state = {
        id:0,
        urgency:3,
        impact:3,
        priority:5,
        date: new Date()

    }
    changePriority(state){
        console.log(state);
        const add = state.urgency + state.impact;
        console.log(add); 
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
    render() {
        const { firebase } = this.props
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
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="id" className="col-form-label-sm">ID</label>
                                        <input type="text" className="form-control form-control-sm" value={ this.state.id } id="id" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user" className="col-form-label-sm">User</label>
                                        <input type="text" className="form-control form-control-sm" id="user" value ={ firebase.email } disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date" className="col-form-label-sm">Date</label>
                                        <input className="form-control form-control-sm" type="text" id="date" value={this.state.date} disabled/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3">
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
                                <div className="col-sm-6 col-md-3 col-lg-3">
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
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Approval</label>
                                        <select className="form-control form-control-sm" id="approval">
                                            <option>Not Required</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Assign To</label>
                                        <select className="form-control form-control-sm" id="assign">
                                            <option>IT Department</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type" className="col-form-label-sm">Application</label>
                                        <select className="form-control form-control-sm" id="applications">
                                            <option>IT Department</option>
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

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase.auth,
        tickets: state.ticket.tickets
    }
}

export default withRouter(connect(mapStateToProps)(NewTicket));
