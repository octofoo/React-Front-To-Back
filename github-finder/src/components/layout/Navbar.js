import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
    // default properties
    static defaultProps = {
        title: "GitHub Finder",
        icon: "fa fa-github",
    };
    // properties types
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    };

    // output
    render() {
        return (
            <nav className="navbar bg-primary">
                <h3><i className={this.props.icon}></i> {this.props.title}</h3>
            </nav>
        )
    }
}

export default Navbar
