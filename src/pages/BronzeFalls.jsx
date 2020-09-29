import React, { Component } from 'react'
import '../App.css';
import WorkNav from '../components/WorkNav';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';





const images = {
    img1: "/assets/bronzefalls/bf-bottle-case.jpg",
    img2: "/assets/bronzefalls/bronze-falls-web.mp4",
    img3: "/assets/bronzefalls/splash-bottle.jpg",
    img4: "/assets/bronzefalls/falls-bottle.jpg",
    img5: "/assets/bronzefalls/balance-bottle.jpg",
    img6: "/assets/bronzefalls/bronze-falls-ad.mp4",
    img7: "/assets/bronzefalls/bronze-falls-social.mp4"

}


const text = {
    txt1: "This was a personal project of mine inspired by the waterfalls of New Zealand. Being a fan of the occasional glass of whisky myself, I know just how important the branding is when it comes to choosing your drink. It was my hope that this whisky would appeal to a luxury clientele.",
    txt2: "You gotta think like a tree. Only think about one thing at a time. Don't get greedy. If you didn't have baby clouds, you wouldn't have big clouds.",
    txt3: "You gotta think like a tree. Only think about one thing at a time. Don't get greedy. If you didn't have baby clouds, you wouldn't have big clouds.",
    txt4: "You gotta think like a tree. Only think about one thing at a time. Don't get greedy. If you didn't have baby clouds, you wouldn't have big clouds.",
    txt5: "You gotta think like a tree. Only think about one thing at a time. Don't get greedy. If you didn't have baby clouds, you wouldn't have big clouds.",
    txt6: "You gotta think like a tree. Only think about one thing at a time. Don't get greedy. If you didn't have baby clouds, you wouldn't have big clouds."
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

const BronzeFalls = () => {


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
                            <motion.div className="work-text-left">
                                <p>{text.txt1}</p>
                            </motion.div>
                        </motion.div>                        

                       
                            <motion.div className="two-col-left"
                            variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img2}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                            <motion.div className="two-col-right"
                            variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img7}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                     
                        
                        

                       
                            <motion.div className="three-col-left"
                            variants={ChildVarients}>
                                <img src={images.img3} alt="" />
                            </motion.div>
                            <motion.div className="three-col-mid"
                            variants={ChildVarients}>
                                <img src={images.img4} alt="" />
                            </motion.div>
                            <motion.div className="three-col-right"
                            variants={ChildVarients}>
                                <img src={images.img5} alt="" />
                            </motion.div>

                            <motion.div className="full-col"
                            variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img6}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                       
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default BronzeFalls;