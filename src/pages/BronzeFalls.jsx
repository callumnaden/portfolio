import React from 'react'
import '../App.css';
import WorkNav from '../components/WorkNav';
import { Player, ControlBar } from 'video-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';






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
        }
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
                        <div className="full-col">
                            <img src={images.img1} alt="" />
                        </div>

                        <div className="full-col">
                            <div className="work-text-left">
                                <p>{text.txt1}</p>
                            </div>
                        </div>                        

                       
                            <div className="two-col-left"
>
                                <Player autoPlay muted loop={true} src={images.img2}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </div>
                            <div className="two-col-right"
>
                                <Player autoPlay muted loop={true} src={images.img7}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </div>
                     
                        
                        

                       
                            <div className="three-col-left"
>
                                <img src={images.img3} alt="" />
                            </div>
                            <div className="three-col-mid"
>
                                <img src={images.img4} alt="" />
                            </div>
                            <div className="three-col-right"
>
                                <img src={images.img5} alt="" />
                            </div>

                            <div className="full-col"
>
                                <Player autoPlay muted loop={true} src={images.img6}>
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </div>


                            <div className="next-project-container">
                            <NavLink to="/latest-work/hush-heath" className="nav-link" activeClassName="work-nav-active"> <div class="next-poject"><h2>NEXT PROJECT</h2> <svg className="right-arrow" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3667 0.333498L13.5707 4.10416L21.8053 12.3388L-1.04954e-06 12.3388L-1.51486e-06 17.6615L21.8053 17.6615L13.5707 25.8962L17.3667 29.6668L32 15.0002L17.3667 0.333498Z" fill="black"/>
</svg></div></NavLink>
                            </div>

                            
                       
                        
                    </motion.div>
                
            </React.Fragment>
        );
    }


export default BronzeFalls;