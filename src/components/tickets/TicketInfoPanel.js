import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewTicket from './NewTicket';

class TicketInfo extends Component {
    render() {
        const permissions = this.props.permissions || false
        return (
            <div className="container">
                { permissions && permissions.ticket.create.canCreate ? <div> 
                        <button type="button" className="btn pull-right btn-info btn-sm" data-toggle="modal" data-target="#NewTicket">
                            New
                        </button>
                        <div>
                            <NewTicket />
                        </div> 
                    </div> : null 
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        permissions: state.auth.permissions
    }
}
export default connect(mapStateToProps)(TicketInfo);