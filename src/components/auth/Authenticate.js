import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Authenticate extends Component {
    render() {
        if(this.props.auth.uid) return <Redirect to='dashboard/tickets' /> 
        if(!this.props.auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container" id="signin">
                <div className="row justify-content-center ">
                    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Authenticate)
