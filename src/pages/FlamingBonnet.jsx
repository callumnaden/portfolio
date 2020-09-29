import React, { Component } from 'react'
import '../App.css';
import WorkNav from '../components/WorkNav';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';



const images = {
    img1: "/assets/flamingbonnet/spilled-sauce.jpg",
    img2: "/assets/flamingbonnet/flaming-bonnet-social.mp4",
    img3: "/assets/flamingbonnet/flaming-bonnet-web.mp4",
    img4: "/assets/flamingbonnet/chillicano.jpg",
    img5: "/assets/flamingbonnet/saucy-air-balloon.jpg",
    img6: "/assets/flamingbonnet/space-pepper.jpg",
    img7: "/assets/flamingbonnet/flaming-bonnet-ad.mp4",
}


const text = {
    txt1: "In collaboration with my uncle, Flaming Bonnet was born out of a love for Caribbean cuisine. Whilst he is busy making the infamous sauce, I was put to the challenge of creating the full identity of the brand including packaging, promotional material and website. Coming to tickle your tastebuds soon...",
   }

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
            delay: 0.4,
            staggerChildren: 0.3,
        }
    }
    
}

const ChildVarients = {
    start: {
        opacity: 0,
        y: '-20px'
    },
    end: {
        opacity: 1,
        y: '0px'
    }
}


const FlamingBonnet = () => {
    
        return (
            <React.Fragment>
                <WorkNav />
                    <motion.div className="container"
                    variants={ParentVarients}
                    initial="start"
                    animate="end">
                        
                        <motion.div className="full-col"
                        variants={ChildVarients}>
                            <img src={images.img1} alt="" />
                        </motion.div>

                        <motion.div className="full-col"
                        variants={ChildVarients}>
                            <div className="work-text-left">
                                <p>{text.txt1}</p>
                            </div>
                        </motion.div>                        

                       
                            <motion.div className="two-col-left"
                            variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img2}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                            <motion.div className="two-col-right"
                            variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img3}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                     
                        
                        

                       
                           


                        <motion.div className="full-col"
                        variants={ChildVarients}>
                            <Player autoPlay muted loop={true} src={images.img7}>
                                <ControlBar disableCompletely={true}/>
                            </Player>
                        </motion.div>

                        <motion.div className="three-col-left"
                        variants={ChildVarients}>
                                <img src={images.img6} alt="" />
                            </motion.div>
                            <motion.div className="three-col-mid"
                            variants={ChildVarients}>
                                <img src={images.img4} alt="" />
                            </motion.div>
                            <motion.div className="three-col-right"
                            variants={ChildVarients}>
                                <img src={images.img5} alt="" />
                            </motion.div>
                       
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }

export default FlamingBonnet;