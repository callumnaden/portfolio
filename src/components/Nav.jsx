import React, { Component } from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    state = {
    };

    render() {
        return (
            <div className="nav">
                <h2><NavLink to="/about" className="nav-link" activeClassName="nav-active" onlyActiveOnIndex>ABOUT.</NavLink> <NavLink to="/latest-work" className="nav-link" activeClassName="nav-active" onlyActiveOnIndex>LATEST WORK.</NavLink> <br/> <NavLink to="/case-studies" className="nav-link" activeClassName="nav-active" onlyActiveOnIndex>CASE STUDIES.</NavLink> <NavLink to="/archive" className="nav-link" activeClassName="nav-active" >ARCHIVE</NavLink></h2>
            </div>
        );
    }
}

export default Nav;