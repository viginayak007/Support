import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email:'',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.state.email !== '' && this.state.password !== ''){
            this.props.signIn(this.state)
        }
    }
    render(){
        const { authError } = this.props;
        if (this.props.auth.uid) return <Redirect to='/dashboard' /> 
        return (
            <div className="container" id="signin">
                <div className="row justify-content-center ">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="card">
                                <div className="text-center card-header">
                                    <legend>SIGN IN</legend>
                                </div>
                                <div className="card-body">
                                  
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label-sm">UserID</label>
                                        <input type="email" className="form-control form-control-sm" id="email" placeholder="Enter UserID" onChange={this.handleChange} required/>
                                        <label className="invalid-feedback">
                                            Enter User ID 
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label-sm">Password</label>
                                        <input type="password" className="form-control form-control-sm" id="password" placeholder="Password" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-info btn-sm">Submit</button>
                                    <span className="pull-right text-danger">
                                        { authError ? <p>{authError}</p> : null }
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
