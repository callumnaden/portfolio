import React, { Component } from 'react'
import '../App.css';


class Footer extends Component {
    state = {
    };

    render() {
        return (
            <div className="footer">
                <div className="mail-me">
                        <a className="mail-me-link" href="#">
                            <svg className="mail-img" width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V33.6H42V0H0ZM11.5903 14.8008L3.5 25.4632V7.80827L11.5903 14.8008ZM4.3435 3.73333H37.6548L21 18.1309L4.3435 3.73333ZM14.308 17.1509L21 22.9357L27.7025 17.1416L37.5235 29.8667H4.66025L14.308 17.1509ZM30.422 14.7915L38.5 7.80827V25.2579L30.422 14.7915Z"/>
                            </svg>say hello
                        </a>
                    </div>
                    <p className="footer-text">You can also find me on
                        <br/>
                        <a href="#" className="social">Linked-In</a> and <a href="#" className="social">Facebook</a>.
                    </p>
            </div>
        );
    }
}

export default Footer;