import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux'; 
import ReactTable from 'react-table';

class GroupConfig extends Component {
    state ={
        selectedGroup:[]
    }

    handleSelectedGroup = (e) =>{
        this.setState({
            selectedGroup: [...this.state.selectedGroup, { id: e.target.value }]
        },() => {  this.props.updates(this.state) });
    }
    
    handleRemoveGroup = (e, value) => {
        let data = this.state.selectedGroup;
        let groupIndex = data.indexOf(value.original);
        data.splice(groupIndex, 1)
        this.setState({data},() => {  this.props.updates(data) });
    }

    render() {
        const { groups } = this.props;
        
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
                let gId = groups.find(group => {
                    return group.id === data.id;
                });
                return gId.name
            }
          },{
            Header: 'Remove',
            maxWidth: 80,
            style: { 'textAlign' : 'center'},
            Cell:(row) => (<button type="button" onClick={(e) => {this.handleRemoveGroup(e, row)}}><i className="fa fa-trash" aria-hidden="true"></i></button>)
        }]

        return (
            <div>
                <h6 className="card-subtitle mb-2 text-muted">Group Access</h6>
                <div className="card bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-2 col-lg-2">
                                <div className="form-group">
                                    <label htmlFor="groups" className="col-form-label-sm">Select Group</label>
                                    <select className="form-control form-control-sm" id="group" value={this.state.groups} onChange={this.handleSelectedGroup}>
                                        <option value="">--select--</option>
                                            {
                                                groups && groups.map((group, i) => {
                                                    let idx = this.state.selectedGroup.findIndex(k => k.id === group.id)
                                                    if(idx === -1){
                                                        return (
                                                            <option key={i} value={group.id}>{group.name}</option>
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
                                        this.state.selectedGroup.length ? <ReactTable
                                            data={this.state.selectedGroup}
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
        groups: state.admin.groups,
    }
}


export default withRouter(connect(mapStateToProps)(GroupConfig));
