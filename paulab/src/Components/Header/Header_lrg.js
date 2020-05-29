import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    super(props){

    }
    render() {
        return (
            <div className="HeaderBody">
                <h2>
                {this.props.title}
                </h2>
            </div>
        );
    }
}

export default Header;