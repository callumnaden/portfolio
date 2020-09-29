import React from 'react'
import '../App.css';
import WorkNav from '../components/WorkNav';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';




const images = {
    img1: "/assets/lesmills/bodycombat-website-1.mp4",
    img2: "/assets/lesmills/lm-infographic-ipad.mp4",
    img3: "/assets/lesmills/lesmills-emails-ipad.mp4",
    img4: "/assets/lesmills/lm-calculators.png",
    img5: "/assets/lesmills/lm-cch-ipad.png",
    img6: "/assets/lesmills/lm-compare.png",
    img7: "/assets/lesmills/LM-iPhone-Mockup.jpg",
    img8: "/assets/lesmills/globalfitnesseemail.jpg",
    img9: "/assets/lesmills/CH1-groupness-newest.mp4",
}

const text = {
    txt1: "I was employed at Les Mills International as a lead UI/UX designer for their latest Company Wide Initiative; promoting their renowned ‘Bodycombat’ class. My brief was to design two landing pages, gated assets, as well as an accompanying email campaign.  ",
    txt2: "By using a clean layout, any unnecessary visual noise was reduced. Considered animation and a new colour scheme was added to highlight buttons and gated assets. Subsequently, the user was easily able to discover important information, resulting in a conversion and a potential lead. ",
    txt3: "After a successful CWI campaign, I was placed into the Club Customer Content Hub team to help assist the lead UX designer. During that time, we designed and developed a selection of tools for the customer, such as the ‘Return on Investment’ calculator. ",
    txt4: "As previously with the CWI, I was tasked with creating another email campaign with a focus on improving conversions and filtering the quality of leads. As a result, a journey map was created and I designed a completely new visual language for the campaign using new layouts and typographic styles that made better and more efficient use of the space. ",
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
        }
    }
}



const LesMills = () => {
 
        return (
            <React.Fragment>
                <WorkNav />
                    <motion.div className="container"
                    variants={ParentVarients}
                    initial="start"
                    animate="end">
                        <div className="full-col">
                            <Player autoPlay muted loop={true} src={images.img1}>
                                <ControlBar disableCompletely={true}/>
                            </Player>
                        </div>

                        <div className="full-col">
                            <div className="work-text-left">
                                <p>{text.txt1}</p>
                            </div>
                        </div>                        

                       
                            <div className="two-col-left">
                                <Player autoPlay muted loop={true} src={images.img2}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </div>
                            <div className="two-col-right">
                                <Player autoPlay muted loop={true} src={images.img3}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </div>
                     
                        
                        
                        <div className="full-col">
                            <div className="work-text-right">
                                <p>{text.txt2}</p>
                            </div>
                        </div>  

                       
                            <div className="three-col-left">
                                <img src={images.img4} alt="" />
                            </div>
                            <div className="three-col-mid">
                                <img src={images.img5} alt="" />
                            </div>
                            <div className="three-col-right">
                                <img src={images.img6} alt="" />
                            </div>


                            <div className="full-col">
                            <div className="work-text-left">
                                <p>{text.txt3}</p>
                            </div>
                        </div>  
                       

                            <div className="full-col">
                                <img src={images.img7} alt="" />
                            </div>


                            <div className="full-col">
                            <div className="work-text-right">
                                <p>{text.txt4}</p>
                            </div>
                        </div>  


                            <div className="two-col-left">
                                <img src={images.img8} alt="" />
                               
                            </div>
                            <div className="two-col-right">
                                <Player autoPlay muted loop={true} src={images.img9}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </div>


                            <div className="next-project-container">
                            <NavLink to="/latest-work/bronze-falls" className="nav-link" activeClassName="work-nav-active"> <div class="next-poject"><h2>NEXT PROJECT</h2> <svg className="right-arrow" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3667 0.333498L13.5707 4.10416L21.8053 12.3388L-1.04954e-06 12.3388L-1.51486e-06 17.6615L21.8053 17.6615L13.5707 25.8962L17.3667 29.6668L32 15.0002L17.3667 0.333498Z" fill="black"/>
</svg></div></NavLink>
                            </div>
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default LesMills;