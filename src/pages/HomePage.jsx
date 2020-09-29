import React, { Component } from 'react'
import '../App.css';
import WorkPreview from '../components/WorkPreview';




class Home extends Component {
    state = {
    };

    render() {
        return (
            <div className="home">
                <WorkPreview />
                
            </div>
        );
    }
}

export default Home;