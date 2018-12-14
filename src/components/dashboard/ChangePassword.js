import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangePassword extends Component {
    render() {
        return (
           <div>
            test
           </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ChangePassword);