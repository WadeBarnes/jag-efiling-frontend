import React, { Component } from 'react';
import './active.forms.css';

class MyApplications extends Component {
  render() {
    return (
        <div id="topicTemplate" className="template container gov-container form">
            <div className="row">
                <div id="main-content" role="main" className="contentPageMainColumn col-sm-12">   
                    <div className="col-sm-12">

                        <div id="active-forms" className="form-section">
                            <h3>My Documents</h3>
                            <div>
                                File #:<input type="text"/>
                                Status:
                                <select>
                                    <option>*** ALL</option>
                                    <option>Draft</option>
                                    <option>Submitted / Pending</option>
                                    <option>Accept</option>
                                    <option>Reject</option>
                                    <option>Upcoming deadline</option>
                                    <option>About expire</option>
                                </select>  
                                <button className="btn btn-primary">Search</button> 
                            </div>
                            <table>
                                <thead>
                                    <tr className="header">
                                        <td></td>
                                        <td>File #</td>
                                        <td>Parties</td>
                                        <td>Status</td>
                                        <td>Recently Modified</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="near-deadline"><i className="fas fa-exclamation-circle"></i></td>
                                        <td>3456769</td>
                                        <td>Moreno / McLane</td>
                                        <td>draft</td>
                                        <td>2018-03-12</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>2098709</td>
                                        <td>Moreno / McLane</td>
                                        <td>rejected</td>
                                        <td>2018-03-01</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>2098710</td>
                                        <td>Moreno / McLane</td>
                                        <td>submitted</td>
                                        <td>2018-03-01</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>2098711</td>
                                        <td>Moreno / McLane</td>
                                        <td>withdrawn</td>
                                        <td>2018-03-01</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
  }
}

export default MyApplications;
