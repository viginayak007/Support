import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux'; 
import { createUser } from '../../../store/actions/authActions';

class NewTicket extends Component {
    
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
        console.log(this.state);
        e.preventDefault();
        e.stopPropagation();
        this.props.createUser(this.state);
    }
    render() {
        return (
            <div className="modal" id="NewTicket">
                <div className="modal-dialog modal-lg">
                    <form className="modal-content" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Create User</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="id" className="col-form-label-sm">ID</label>
                                        <input type="text" className="form-control form-control-sm" value="0" id="id" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label-sm">Email</label>
                                        <input type="email" className="form-control form-control-sm" id="email" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="firstName" className="col-form-label-sm">First Name</label>
                                        <input type="text" className="form-control form-control-sm" id="firstName" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName" className="col-form-label-sm">Last Name</label>
                                        <input type="text" className="form-control form-control-sm" id="lastName" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label-sm">Password</label>
                                        <input type="text" className="form-control form-control-sm" id="password" onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewTicket));
