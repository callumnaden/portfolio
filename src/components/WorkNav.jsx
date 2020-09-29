import React, { Component } from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';




    class WorkNav extends Component {
        
       

        render() {

            return (

            <div className="work-nav">
                <p><NavLink to="/latest-work/les-mills" className="nav-link" activeClassName="work-nav-active">LES MILLS.</NavLink></p>
                <p><NavLink to="/latest-work/bronze-falls" className="nav-link" activeClassName="work-nav-active">BRONZE FALLS.</NavLink></p>
                <p><NavLink to="/latest-work/hush-heath" className="nav-link" activeClassName="work-nav-active">HUSH HEATH.</NavLink></p>
                <p><NavLink to="/latest-work/flaming-bonnet" className="nav-link" activeClassName="work-nav-active">FLAMING BONNET.</NavLink></p>

            </div>

            
        );
        
    }
}



export default WorkNav;