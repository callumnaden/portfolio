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



const Bio = () => {


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
                        <p className="about-text">Innovative, dynamic and forward-thinking designer with an interest in producing visuals for print, digital and web based media. By focusing on simplicity and fine details, I am able to create unique, well-crafted work. As well as this, my ability to clearly communicate ideas allows me to comfortably collaborate with clients and co-workers. I am able to confidently take a project from initial concept right through to the final outcome. It is hoped my previous experience, desire to widen my skill set and my effective time management will assist me in making the most of every opportunity that I seek out and help my career as a Brand and Web Creative flourish.</p>
                        </div>
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default Bio;