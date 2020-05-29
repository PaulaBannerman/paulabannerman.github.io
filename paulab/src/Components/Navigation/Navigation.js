import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Navigation.css'
class Navigation extends Component {
    render() {
        return (
            <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="">Apps/Web</Link>
                <Link to="">Graphic Design</Link>
                <Link to="">Video Design</Link>
                <Link to="">Resume</Link>
                <Link to="">Contact</Link>
                 
            </div>
        );
    }
}

export default Navigation;