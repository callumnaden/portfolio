import React from 'react'
import '../App.css';
import WorkNav from '../components/WorkNav';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';


const images = {
    img1: "/assets/hushheath/thebull-web.mp4",
    img2: "/assets/hushheath/ttt-social-asset.jpg",
    img3: "/assets/hushheath/hh-social-assets.jpg",
    img4: "/assets/hushheath/tbh-menus.jpg",
    img5: "/assets/hushheath/hh-mothersday-flyer.jpg",
    img6: "/assets/hushheath/tgi-menu.jpg",
    img7: "/assets/hushheath/ttt-six-nations.jpg",
    img8: "/assets/hushheath/tgi-six-nations.jpg",
    img9: "/assets/hushheath/ship-web.mp4",
    img10: "/assets/hushheath/hh-emails-mob.mp4"
}
const text = {
    txt1: "The brief for this website was assigned to me when I was employed at my previous job. The client wanted a bespoke website that portrayed their company personality and enticed potential customers. The final outcome was well received and the client is still using this website today.",
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


const HushHeath = () => {

        return (
            <React.Fragment>
                <WorkNav />
                    <motion.div className="container"
                    variants={ParentVarients}
                    initial="start"
                    animate="end">
                        
                        <motion.div className="full-col"
                         variants={ChildVarients}>
                            <Player autoPlay muted loop={true} src={images.img1}>
                                <ControlBar disableCompletely={true}/>
                            </Player>
                        </motion.div>

                        <motion.div className="full-col"
                         variants={ChildVarients}>
                            <div className="work-text-left">
                                <p>{text.txt1}</p>
                            </div>
                        </motion.div>                        

                       
                            <motion.div className="two-col-left"
                             variants={ChildVarients}>
                                <img src={images.img2} alt="" />
                            </motion.div>
                            <motion.div className="two-col-right"
                             variants={ChildVarients}>
                                <img src={images.img3} alt="" />
                            </motion.div>
                     
                        
                        
                        

                       
                            <motion.div className="three-col-left"
                             variants={ChildVarients}>
                                <img src={images.img4} alt="" />
                            </motion.div>
                            <motion.div className="three-col-mid"
                             variants={ChildVarients}>
                                <img src={images.img5} alt="" />
                            </motion.div>
                            <motion.div className="three-col-right"
                             variants={ChildVarients}>
                                <img src={images.img6} alt="" />
                            </motion.div>



                            <motion.div className="two-col-left"
                             variants={ChildVarients}>
                                <img src={images.img7} alt="" />
                            </motion.div>
                            <motion.div className="two-col-right"
                             variants={ChildVarients}>
                                <img src={images.img8} alt="" />
                            </motion.div>

                        <motion.div className="full-col"
                         variants={ChildVarients}>
                            <Player autoPlay muted loop={true} src={images.img9}>
                                <ControlBar disableCompletely={true}/>
                            </Player>
                        </motion.div>
                       
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default HushHeath;