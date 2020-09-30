import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import WorkPreview from '../components/WorkPreview';



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




const LatestWork = () => {


        return (
            <motion.div className="latest-work"
            variants={ParentVarients}
                    initial="start"
                    animate="end">
                
            
                <div className="work-nav">
                    <motion.p
                    variants={ChildVarients}>
                        <NavLink to="/latest-work/les-mills" className="nav-link" activeClassName="work-nav-active">LES MILLS.</NavLink></motion.p>
                    <motion.p
                    variants={ChildVarients}><NavLink to="/latest-work/bronze-falls" className="nav-link" activeClassName="work-nav-active">BRONZE FALLS.</NavLink></motion.p>
                    <motion.p
                    variants={ChildVarients}><NavLink to="/latest-work/hush-heath" className="nav-link" activeClassName="work-nav-active">HUSH HEATH.</NavLink></motion.p>
                    <motion.p
                    variants={ChildVarients}><NavLink to="/latest-work/flaming-bonnet" className="nav-link" activeClassName="work-nav-active">FLAMING BONNET.</NavLink></motion.p>
                </div>
            

                    <WorkPreview />
              

                
            </motion.div>
        );
    }

export default LatestWork;