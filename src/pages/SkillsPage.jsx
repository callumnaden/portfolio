import React from 'react'
import '../App.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';


const ParentVarients = {
    start: {
        scale: 1,
        opacity: 0,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
        }
    }
}



const Skills = () => {


        return (
            <React.Fragment>
                <div className="work-nav">
                        <p><NavLink to="/about/bio" className="nav-link" activeClassName="work-nav-active">BIO.</NavLink></p>
                        <p><NavLink to="/about/skills" className="nav-link" activeClassName="work-nav-active">SKILLS.</NavLink></p>
                        <p><NavLink to="/about/experience" className="nav-link" activeClassName="work-nav-active">EXPERIENCE.</NavLink></p>
                   </div>
                    <motion.div className="container"
                        variants={ParentVarients}
                        initial="start"
                        animate="end">
                        <div className="full-col">
                        <p className="skills-text">
                            Adobe Creative Suite
                            <br/>
                            HTML
                            <br/>
                            CSS
                            <br/>
                            Java Script
                            <br/>
                            PHP
                            <br/>
                            React JS
                            <br/>
                            Mailchimp
                            <br/>
                            SEO
                            <br/>
                            Google Analytics 
                            <br/>
                            Facebook Advertising 
                            <br/>
                            Wordpress
                            <br/>
                            Blender
                            <br/>
                            Microsoft Office</p></div>
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default Skills;