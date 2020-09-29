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



const Experience = () => {


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
                        <p className="about-text">
                        UI &amp; UX DESIGNER
                        <br/>
                        <span className="bold-text">
                        Les Mills | Jul 2019 - Nov 2019
                        </span>
                        <br/>
                        <span className="exp-text">
                        I was employed at Les Mills International as a lead UI/UX designer for their latest Company Wide Initiative. After a successful CWI campaign, I was placed into the Club Customer Content Hub team to help assist the lead UX designer.
                        </span>
                        <br/>
                        <br/>
                        <br/>

                        BRAND &amp; WEB CREATIVE
                        <br/>
                        <span className="bold-text">
                        Harry Larry &amp; Gary | Nov 2016 - Nov 2018</span>
                        <br/>
                        <span className="exp-text">
                        I worked as a brand and web developer designing and providing branding and websites for local and international clients and businesses.
                        </span>
                        <br/>
                        <br/>
                        <br/>
                        
                        GRAPHIC DESIGNER
                        <br/>
                        <span className="bold-text">
                        Freelance | 2014 - Present</span>
                        <br/>
                        <span className="exp-text">
                        I worked as a freelance designer providing branding and websites for small clients and businesses.
                        </span> </p>
                            </div>
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default Experience;