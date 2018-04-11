import React from 'react';
import Reflux from 'reflux';
import MyLink from "../globalComponents/MyLink.js";
import {Link} from "react-router-dom";
import LoginComponent from './LoginComponent.js';
import {UserStore, UserActions} from '../../reflux/UserReflux.js';

class NavigationBar extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = UserStore
    }

    logout = event => {
        event.preventDefault();
        UserActions.logout();
    };

    render() {
        if (this.state.authenticated === false)
            return (
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <LoginComponent/>
                    </ul>
                </div>);

        return (
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <MyLink to="/patients" icon="fa-users" label="PACIENTES"/>
                    </li>
                    <li>
                        <MyLink to="/protocols" icon="fa-file" label="PROTOCOLOS"/>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-expanded="false">
                            <i className="fa fa-user"></i> {this.state.user.fullname} <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu user-login" role="menu">
                            <li className="user-details">
                                <strong>Email:</strong><br /> {this.state.user.email}
                                <hr />
                                <strong>Last Login:</strong><br /> {this.state.user.last_login}
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="profile"><i className="fa fa-pencil-square-o"></i> Edit Profile</Link>
                            </li>
                            <li>
                                <Link to='help'><i className="fa fa-question-circle"></i> Help</Link>
                            </li>
                            <li className="divider"></li>
                            <li><a  onClick={this.logout}><i className="fa fa-sign-out"></i>
                                Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        )
    }
}

export default NavigationBar;