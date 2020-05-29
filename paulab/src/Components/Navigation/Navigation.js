import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Navigation.css'
class Navigation extends Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/apps">Apps/Web</Link></li>
                    <li>  <Link to="/graphicdesign">Graphic Design</Link></li>
                    <li> <Link to="/video">Video Design</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                
                
               
              
               
                
                
                 
            </div>
        );
    }
}

export default Navigation;