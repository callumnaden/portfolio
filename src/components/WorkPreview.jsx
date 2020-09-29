import React, { Component } from 'react'
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';

import '../App.css';


const ParentVarients = {
    start: {
        scale: 0,
        opacity: 0,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            delay: 0.4,
            staggerChildren: 0.3,
        },
    }
}

const WorkPreview = () => {
  

		return(
            <motion.div className="container"
                varients={ParentVarients}>
                <Player autoPlay muted loop={true} src="/assets/work-preview.mp4">
                    <ControlBar disableCompletely={true}/>
                </Player>
			</motion.div>
        );
    }


export default WorkPreview;