import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux'; 
import { getOptions  } from '../../../../store/actions/adminActions';
import _ from 'lodash';


class TicketConfig extends Component {
    componentWillMount(){
        this.props.getOptions()
    }
    
    state ={
        ticket: {create:{canCreate:false}}
    }

    handleChangeChecked = (e) => {
        this.setState(_.set(this.state, e.target.id, e.target.checked));
        this.props.updates(this.state)
    }

    render() {
        const { options } = this.props;
        return (
            <div>
                <h6 className="card-subtitle mb-2 text-muted">Ticket Controls</h6>
                <div className="card bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="['ticket']['create']['canCreate']" onChange={ this.handleChangeChecked }/>
                                    <label className="form-check-label text-muted" htmlFor="canCreate" >
                                        Can Create Ticket
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
                                <div className="container">
                                    {
                                        this.state.ticket.create.canCreate && <div>
                                            <div className="table-responsive container">
                                                <div className="text-muted">Set Priorities</div>
                                                <table className="table table-borderless table-sm text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>Priorities</th>
                                                            <th>Urgency</th>
                                                            <th>Impact</th> 
                                                        </tr> 
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>High--1</td>
                                                            <td><input className="form-check-input" type="checkbox" id="['ticket']['create']['priority']['urgency']['high']" onChange={ this.handleChangeChecked }/></td>
                                                            <td><input className="form-check-input" type="checkbox" id="['ticket']['create']['priority']['impact']['high']" onChange={ this.handleChangeChecked }/></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Normal--2</td>
                                                            <td><input className="form-check-input" type="checkbox" id="['ticket']['create']['priority']['urgency']['normal']" onChange={ this.handleChangeChecked }/></td>
                                                            <td><input className="form-check-input" type="checkbox" id="['ticket']['create']['priority']['impact']['normal']" onChange={ this.handleChangeChecked }/></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Low--3</td>
                                                            <td><input className="form-check-input" type="checkbox" id="['ticket']['create']['priority']['urgency']['low']" onChange={ this.handleChangeChecked }/></td>
                                                            <td><input className="form-check-input" type="checkbox" id="['ticket']['create']['priority']['impact']['low']" onChange={ this.handleChangeChecked }/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr size="30" />
                                            <div className="table-responsive container">
                                                <div className="text-muted">Set Type</div>
                                                <table className="table table-borderless table-sm text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>Type</th>
                                                            <th>Can Select</th>
                                                        </tr> 
                                                    </thead>
                                                    <tbody>
                                                        { options.ticket.types && options.ticket.types.map((type, i) => (
                                                            
                                                            <tr key={i}>
                                                                <td>{type}</td>
                                                                <td><input className="form-check-input" type="checkbox" id={"['ticket']['create']['type']['" + type +"']"} onChange={ this.handleChangeChecked }/></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                           
                                        </div> 
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
        options: state.admin.options
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOptions: () => dispatch(getOptions('ticket'))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketConfig));
