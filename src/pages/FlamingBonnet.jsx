import React from 'react'
import '../App.css';
import WorkNav from '../components/WorkNav';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';





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
        }
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
                        
                        <div className="full-col">
                            <img src={images.img1} alt="" />
                        </div>

                        <div className="full-col">
                            <div className="work-text-left">
                                <p>{text.txt1}</p>
                            </div>
                        </div>                        

                       
                            <div className="two-col-left">
                                <Player playsInline={true} autoPlay muted loop={true} src={images.img2} fluid={false} width="100%" height="100%" className="video-player">
                                    <ControlBar autoHide={true} className="control-bar" disableCompletely={true}/>
                                </Player>
                            </div>
                            <div className="two-col-right">
                                <Player playsInline={true} autoPlay muted loop={true} src={images.img3} fluid={false} width="100%" height="100%" className="video-player">
                                    <ControlBar autoHide={true} className="control-bar" disableCompletely={true}/>
                                </Player>
                            </div>
                     
                        
                        

                       
                           


                        <div className="full-col">
                            <Player playsInline={true} autoPlay muted loop={true} src={images.img7} fluid={false} width="100%" height="100%" className="video-player">
                                <ControlBar autoHide={true} className="control-bar" disableCompletely={true}/>
                            </Player>
                        </div>

                        <div className="three-col-left">
                                <img src={images.img6} alt="" />
                            </div>
                            <div className="three-col-mid">
                                <img src={images.img4} alt="" />
                            </div>
                            <div className="three-col-right">
                                <img src={images.img5} alt="" />
                            </div>


                            <div className="next-project-container">
                            <NavLink to="/latest-work/les-mills" className="nav-link" activeClassName="work-nav-active"> <div class="next-poject"><h2>NEXT PROJECT</h2> <svg className="right-arrow" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3667 0.333498L13.5707 4.10416L21.8053 12.3388L-1.04954e-06 12.3388L-1.51486e-06 17.6615L21.8053 17.6615L13.5707 25.8962L17.3667 29.6668L32 15.0002L17.3667 0.333498Z" fill="black"/>
</svg></div></NavLink>
                            </div>
                       
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }

export default FlamingBonnet;