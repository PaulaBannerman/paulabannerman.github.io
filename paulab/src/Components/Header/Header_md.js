import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    super(props){

    }
    render() {
        return (
            <div className="HeaderBody">
                <h3>
                {this.props.title}
                </h3>
            </div>
        );
    }
}

export default Header;