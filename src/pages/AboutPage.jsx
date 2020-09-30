import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const ParentVarients = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            type: 'spring',
            staggerChildren: 0.2,
            when: "beforeChildren",
        }
    }
}

const ChildVarients = {
    start: {
        opacity: 0,
        y: '0px'
    },
    end: {
        opacity: 1,
        y: '0px'
    }
}




const AboutPage = () => {


        return (

            <React.Fragment>

                <div className="work-nav">
                    <motion.p
                    variants={ChildVarients}>
                        <NavLink to="/about/bio" className="nav-link" activeClassName="work-nav-active">BIO.</NavLink></motion.p>
                    <motion.p
                    variants={ChildVarients}><NavLink to="/about/skills" className="nav-link" activeClassName="work-nav-active">SKILLS.</NavLink></motion.p>
                    <motion.p
                    variants={ChildVarients}><NavLink to="/about/experience" className="nav-link" activeClassName="work-nav-active">EXPERIENCE.</NavLink></motion.p>
                   </div>

            <motion.div className="container"
            variants={ParentVarients}
                    initial="start"
                    animate="end">
                
            
               

                        <p className="about-text">I specialise in brand identity, creative direction and digital design, helping brands design products from idea to final execution.</p>
                        <img src="/assets/self-portrait-2.jpg" alt="" />
            </motion.div>
            </React.Fragment>
        );
    }

export default AboutPage;