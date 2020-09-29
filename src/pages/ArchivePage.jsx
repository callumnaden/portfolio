import React from 'react'
import '../App.css';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';


const images = {
            img1: "/assets/archive/kalo-mobile.jpg",
            img2: "/assets/archive/kalo-web.mp4",
            img3:"/assets/archive/oscillate-vid-3.mp4",
            img4:"/assets/archive/priestleys-web.mp4",
            img5:"/assets/archive/ict-web.jpg",
            img6:"/assets/archive/jersey-sport-covers.jpg",
            img7:"/assets/archive/och-mob-emails.jpg",
            img8:"/assets/archive/contentpark-web.mp4",
            img9:"/assets/archive/content-pk-mobile.jpg",
            img10:"/assets/archive/figtree-web.mp4",
            img11:"/assets/archive/figtree-brochure-1.jpg",
            img12:"/assets/archive/figtree-brochure-2.jpg"
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


    const Archive = () => {
        return (
            <React.Fragment>
                    <motion.div className="container"
                        variants={ParentVarients}
                        initial="start"
                        animate="end">
                        

                            <motion.div className="two-col-left"
                                variants={ChildVarients}>
                                <img src={images.img1} alt="" />
                            </motion.div>

                            <motion.div className="two-col-right"
                                variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img2}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                     

                            <motion.div className="full-col"
                                variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img3}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                        
                    
                       
                            <motion.div className="three-col-left"
                                variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img4}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>

                            <motion.div className="three-col-mid"
                                variants={ChildVarients}>
                                <img src={images.img5} alt="" />
                            </motion.div>
                            <motion.div className="three-col-right"
                                variants={ChildVarients}>
                                <img src={images.img7} alt="" />
                            </motion.div>


                            <motion.div className="full-col"
                                variants={ChildVarients}>
                                <img src={images.img6} alt="" />
                            </motion.div>


                            <motion.div className="two-col-left"
                                variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img8}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>

                            <motion.div className="two-col-right"
                                variants={ChildVarients}>
                                <img src={images.img9} alt="" />
                            </motion.div>


                            <motion.div className="three-col-left"
                                variants={ChildVarients}>
                                <Player autoPlay muted loop={true} src={images.img10}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </motion.div>
                            <motion.div className="three-col-mid"
                                variants={ChildVarients}>
                                <img src={images.img11} alt="" />
                            </motion.div>
                            <motion.div className="three-col-right"
                                variants={ChildVarients}>
                                <img src={images.img12} alt="" />
                            </motion.div>
                       
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }

export default Archive;