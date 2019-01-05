import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class SelectOrganization extends Component {
    
    render() {
        const { parent, organizations } = this.props;
        const OrganizationOption = organizations && organizations.map((organization, i) => {
            console.log(parent)
            if(organization.parent === parent){
                return (<option key={i} value={organization.parent}>{organization.name}</option>)
            }else{
                return null;
            }
        });
        console.log(OrganizationOption);
        return (
            <select className="form-control form-control-sm" id="parent" onChange={this.handleChange}>
                <option id="0">---none---</option> 
                { OrganizationOption }
        </select>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        organizations: state.admin.organizations
    }
}


export default (connect(mapStateToProps)(SelectOrganization));
