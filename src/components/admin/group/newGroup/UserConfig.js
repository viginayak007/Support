import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux'; 
import { getUsers } from '../../../../store/actions/adminActions';
import ReactTable from 'react-table';


class UserConfig extends Component {
    componentWillMount(){
        this.props.getUsers()
    }
    
    state ={
        selectedUsers:[]
    }

    handleSelectedUser = (e) =>{
        this.setState({
            selectedUsers: [...this.state.selectedUsers, { id: e.target.value }]
        },() => {  this.props.updates(this.state) });
       
    }
    
    handleRemoveUser = (e, value) => {
        let data = this.state.selectedUsers;
        let userIndex = data.indexOf(value.original);
        data.splice(userIndex, 1);
        this.setState({data},() => {  this.props.updates(data) });
    }

    render() {
        const { users } = this.props;
        const columns = [{
            Header: '#',
            maxWidth: 50,
            filterable: false,
            Cell: (id) => {
                return <div>{id.index + 1}</div>;
            }
          },{
            Header: 'Name',
            id: 'id',
            accessor: data => {
                let selectedUser = users.find(user => {
                    return user.id === data.id;
                });
                return selectedUser.firstName + ' ' + selectedUser.lastName 
            }
          },{
            Header: 'Remove',
            maxWidth: 80,
            style: { 'textAlign' : 'center'},
            Cell:(row) => (<button type="button" onClick={(e) => {this.handleRemoveUser(e, row)}}><i className="fa fa-trash" aria-hidden="true"></i></button>)
        }]

        return (
            <div>
                <h6 className="card-subtitle mb-2 text-muted">Add User's to Group</h6>
                <div className="card bg-light">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-2 col-lg-2">
                            <div className="form-group">
                                <label htmlFor="groups" className="col-form-label-sm">Select User</label>
                                <select className="form-control form-control-sm" id="users" onChange={this.handleSelectedUser}>
                                    <option value="">--select--</option>
                                    {
                                        users && users.map((user, i) => {
                                            let idx = this.state.selectedUsers.findIndex(k => k.id === user.id)
                                            if(idx === -1){
                                                return (
                                                    <option key={i} value={ user.id }>{user.firstName + " " + user.lastName}</option> 
                                                )
                                            }else{
                                                return null
                                            }
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-8 col-lg-8 pt-2">
                            <div className="form-group table-responsive-sm">
                                {
                                    this.state.selectedUsers.length ? <ReactTable
                                        data={this.state.selectedUsers}
                                        columns={columns}
                                        defaultPageSize = {5}
                                        pageSizeOptions = {[5, 10, 15, 20]}
                                        className="-striped -highlight -btn-sm"
                                        collapseOnPageChange = {true}
                                        minRows = {true}
                                    /> : null
                                }
                            
                            </div>
                        </div>
                    </div>
                        
                   
                    </div>
                </div>
                
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.admin.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserConfig));
