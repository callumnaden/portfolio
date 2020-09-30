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

const text = {
    kalo: "Here shows an example of work I carried out for one of our international clients. The company is an advisory firm based in the Cayman Islands. They were looking for a full rebrand and website that depicted their professionalism.",
    oscil: "When freelancing, I was approached by a local record label and asked to produce some motion graphics that could be used as a back drop for a live show. The visuals were inspired by the company name and had to be on a seamless loop, keeping the crowd entertained. Needless to say, the night was a big success.",
    fig: "Family values are at the core of Figtree Financial. When generating their website and publications, it was important that this ethos was maintained whilst their sophisticated nature shone through. As with other websites I have designed, Figtree Financial are still making use of my work.",
    och: "This shows the various email marketing campaigns that I created for a five-star, golf resort and spa hotel. These were sent out on a weekly basis so it was vital that the content remained interesting and engaging. Using marketing techniques, such as strong call to actions, we were able to help the client in increasing their bookings and revenues.",
    contentpk: "It was an honour for me to be asked to develop this website for a regeneration project based in my hometown. Having worked in the area specifically myself, I knew just how significant it was that a project like this be taken seriously. As a result, my building of the website was done with passion.",
    ict: "When seeking out a new lawyer, you want to know that you are in capable and confident hands. This is what I had at the forefront of my mind when designing the websites for two separate, international law firms. Thinking about the user experience, the sleek, efficient and easy navigable websites assisted in putting the user at ease during what may be otherwise a stressful time.",
    jersey: "When working as a freelancer abroad, I was approached for this project by a local sport foundation. They were in need of an illustrated front cover and infographic poster so that they could enter their collected data into a worldwide report on physical activity. It was of upmost importance to them that the infographic was accessible for all readers."
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
                                <Player playsInline={true} autoPlay muted loop={true} src={images.img2} fluid={false} width="100%" height="100%" className="video-player">
                                    <ControlBar className="control-bar" disableCompletely={true}/>
                                </Player>
                            </motion.div>

                            <div className="full-col">
                                <div className="work-text-left">
                                    <p>{text.kalo}</p>
                                </div>
                            </div>   
                     

                            <motion.div className="full-col"
                                variants={ChildVarients}>
                                <Player playsInline={true} autoPlay muted loop={true} src={images.img3} fluid={false} width="100%" height="100%" className="video-player">
                                    <ControlBar className="control-bar" disableCompletely={true}/>
                                </Player>
                            </motion.div>
                        
                            <div className="full-col">
                                <div className="work-text-right">
                                    <p>{text.oscil}</p>
                                </div>
                            </div>   
                       
                            <motion.div className="two-col-left"
                                variants={ChildVarients}>
                                <Player playsInline={true} autoPlay muted loop={true} src={images.img4} fluid={false} width="100%" height="100%" className="video-player">
                                    <ControlBar className="control-bar" disableCompletely={true}/>
                                </Player>
                            </motion.div>

                            <motion.div className="two-col-right"
                                variants={ChildVarients}>
                                <img src={images.img5} alt="" />
                            </motion.div>


                            <div className="full-col">
                                <div className="work-text-left">
                                    <p>{text.ict}</p>
                                </div>
                            </div>   


                            <motion.div className="full-col"
                                variants={ChildVarients}>
                                <img src={images.img7} alt="" />
                            </motion.div>


                            <div className="full-col">
                                <div className="work-text-right">
                                    <p>{text.och}</p>
                                </div>
                            </div>   


                            <motion.div className="two-col-left"
                                variants={ChildVarients}>
                                <Player playsInline={true} autoPlay muted loop={true} src={images.img8} fluid={false} width="100%" height="100%" className="video-player">
                                    <ControlBar className="control-bar" disableCompletely={true}/>
                                </Player>
                            </motion.div>

                            <motion.div className="two-col-right"
                                variants={ChildVarients}>
                                <img src={images.img9} alt="" />
                            </motion.div>


                            <div className="full-col">
                                <div className="work-text-left">
                                    <p>{text.contentpk}</p>
                                </div>
                            </div>   



                            <motion.div className="full-col"
                                variants={ChildVarients}>
                                <img src={images.img6} alt="" />
                            </motion.div>


                            <div className="full-col">
                                <div className="work-text-right">
                                    <p>{text.jersey}</p>
                                </div>
                            </div>   


                            <motion.div className="three-col-left"
                                variants={ChildVarients}>
                                <Player playsInline={true} autoPlay muted loop={true} src={images.img10} fluid={false} width="100%" height="100%" className="video-player">
                                    <ControlBar className="control-bar" disableCompletely={true}/>
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
                       
                            <div className="full-col">
                                <div className="work-text-left">
                                    <p>{text.jersey}</p>
                                </div>
                            </div>   
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }

export default Archive;