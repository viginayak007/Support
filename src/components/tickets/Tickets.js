import React, { Component } from 'react';

class Tickets extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="table-responsive" id="tickets-table">
                        <table className="table table-hover table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Company</th>
                                    <th>Divison</th>
                                    <th>User</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Urgency</th>
                                    <th>Impact</th>
                                    <th>Priority</th>
                                    <th>Last Updated</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10/11/2018</td>
                                    <td>Juliet</td>
                                    <td>Shades</td>
                                    <td>Test</td>
                                    <td>Service Request</td>
                                    <td>Need to add the user</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>10/11/2018</td>
                                    <td>Open</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10/11/2018</td>
                                    <td>Juliet</td>
                                    <td>Shades</td>
                                    <td>Test</td>
                                    <td>Service Request</td>
                                    <td>Need to add the user</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>10/11/2018</td>
                                    <td>Open</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tickets;