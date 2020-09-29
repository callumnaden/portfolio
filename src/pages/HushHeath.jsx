import React from 'react'
import '../App.css';
import WorkNav from '../components/WorkNav';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';



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
        }
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

                       
                            <div className="two-col-left"
>
                                <img src={images.img2} alt="" />
                            </div>
                            <div className="two-col-right"
>
                                <img src={images.img3} alt="" />
                            </div>
                     
                        
                        
                        

                       
                            <div className="three-col-left"
>
                                <img src={images.img4} alt="" />
                            </div>
                            <div className="three-col-mid"
>
                                <img src={images.img5} alt="" />
                            </div>
                            <div className="three-col-right"
>
                                <img src={images.img6} alt="" />
                            </div>



                            <div className="two-col-left"
>
                                <img src={images.img7} alt="" />
                            </div>
                            <div className="two-col-right"
>
                                <img src={images.img8} alt="" />
                            </div>

                        <div className="full-col">
                            <Player autoPlay muted loop={true} src={images.img9}>
                                <ControlBar disableCompletely={true}/>
                            </Player>
                        </div>



                        <div className="next-project-container">
                            <NavLink to="/latest-work/flaming-bonnet" className="nav-link" activeClassName="work-nav-active"> <div class="next-poject"><h2>NEXT PROJECT</h2> <svg className="right-arrow" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3667 0.333498L13.5707 4.10416L21.8053 12.3388L-1.04954e-06 12.3388L-1.51486e-06 17.6615L21.8053 17.6615L13.5707 25.8962L17.3667 29.6668L32 15.0002L17.3667 0.333498Z" fill="black"/>
</svg></div></NavLink>
                            </div>
                       
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default HushHeath;