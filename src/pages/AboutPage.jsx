import React, { Component } from 'react'
import '../App.css';


class AboutPage extends Component {
    state = {
    };

    render() {
        return (
            <div className="container">

                        <p className="about-text">I specialise in brand identity, creative direction and digital design, helping brands design products from idea to final execution.</p>
                        <img src="/assets/self-portrait-2.jpg" alt="" />
            </div>
        );
    }
}

export default AboutPage;