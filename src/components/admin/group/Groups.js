import React, { Component } from 'react';
import GroupInfoPanel from './GroupInfoPanel';
import { getGroups } from './../../../store/actions/adminActions'; 
import { connect } from 'react-redux';

class Groups extends Component {
    componentWillMount() {
        this.props.getGroups();
    }
    render() {
       
        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                    < GroupInfoPanel />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                </div>
            </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        groups: state.admin.groups
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGroups: () => dispatch(getGroups())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);