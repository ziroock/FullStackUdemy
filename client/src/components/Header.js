import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent () {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                    ];
        }
    }

    render() {
        //console.log(this.props);
        return (
            <React.Fragment>
            <nav>
                <div className="nav-wrapper" style={{margin: '0 15px'}}>
                    <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
                        Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
                <div className={'directions'}
                style={{
                    position: 'absolute',
                    top: '300px',
                    right: '50px',
                    width: '200px',
                    background: '#8097A2',
                    borderRadius: '5px',
                    padding: '10px',
                    color: 'white',
                    zIndex: '5'}}>
                    <div style={{textAlign: 'center'}}>NOTE</div>
                    To add credits use the
                    following card number <b>4242 4242 4242 4242</b>, any 3 digit CVC and an expiration
                    date that is in the future from the day you are using the application.
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);