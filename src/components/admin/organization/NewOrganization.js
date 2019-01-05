import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux'; 
import { createOrganization } from '../../../store/actions/adminActions';

class NewOrganization extends Component {
    state ={
        parent:0,
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
        console.log(this.state);
        e.preventDefault();
        e.stopPropagation();
        this.props.createOrganization(this.state);
    }
    render() {
        const { organizations } =  this.props;
       
        return (
            <div className="modal" id="NewOrganization">
                <div className="modal-dialog modal-lg">
                    <form className="modal-content" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Create Organization</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
    
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label-sm">Name</label>
                                        <input type="text" className="form-control form-control-sm" id="name" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label-sm">Email</label>
                                        <input type="email" className="form-control form-control-sm" id="email" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="area" className="col-form-label-sm">Area</label>
                                        <input type="text" className="form-control form-control-sm" id="area" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="street" className="col-form-label-sm">Street</label>
                                        <input type="text" className="form-control form-control-sm" id="street" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city" className="col-form-label-sm">City/Town</label>
                                        <input type="text" className="form-control form-control-sm" id="city" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="postalcode" className="col-form-label-sm">PostalCode</label>
                                        <input type="text" className="form-control form-control-sm" id="postalcode" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="state" className="col-form-label-sm">State</label>
                                        <input type="text" className="form-control form-control-sm" id="state" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country" className="col-form-label-sm">Country</label>
                                        <input type="text" className="form-control form-control-sm" id="country" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="parent" className="col-form-label-sm">Parent</label>
                                        <select className="form-control form-control-sm" id="parent" onChange={this.handleChange}>
                                            <option id="0">---none---</option> 
                                            {
                                                organizations && organizations.map((organization, i) =>  {
                                                    return <option key={i} value={organization.id}>{organization.name}</option>
                                                }
                                            )}
                                        </select>
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
        organizations: state.admin.organizations,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOrganization: (organization) => dispatch(createOrganization(organization))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewOrganization));
