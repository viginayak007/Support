import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux'; 
import { createGroup } from '../../../store/actions/adminActions';

import GroupConfig from './newGroup/GroupConfig'
import TicketConfig from './newGroup/TicketConfig'
import UserConfig from './newGroup/UserConfig'


class NewGroup extends Component {
    state ={
        name:"",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(this.state)
        if(this.state.config.selectedUsers){
            this.props.createGroup(this.state);
            this.setState(this.state);
        }else{
            alert("kindly user(s)")
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        }, () => {
            console.log(this.state);
        });
        
    }
    handleComponentUpdates = (updates) => {
        let config = {...this.state.config, ...updates}
        this.setState({config}, () =>{
            console.log(this.state)
        })
    }
    render() {
        
        return (
            <div className="modal" id="NewGroup">
                <div className="modal-dialog modal-lg">
                    <form className="modal-content" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Create Group</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
    
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6 col-md-2 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label-sm">Name</label>
                                        <input type="text" className="form-control form-control-sm" id="name" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
                                    <GroupConfig updates ={ this.handleComponentUpdates }/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                                    <TicketConfig updates ={ this.handleComponentUpdates }/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                                    <UserConfig updates ={ this.handleComponentUpdates }/>
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
        groups: state.admin.groups,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGroup: (group) => dispatch(createGroup(group)),
       
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGroup));
