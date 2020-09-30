import React from 'react'
import { Player, ControlBar } from 'video-react';

import '../App.css';


const WorkPreview = () => {
  

		return(
            <div className="container">
                <Player playsInline={true} autoPlay muted loop={true} src="/assets/work-preview.mp4">
                    <ControlBar disableCompletely={true}/>
                </Player>
			</div>
        );
    }


export default WorkPreview;