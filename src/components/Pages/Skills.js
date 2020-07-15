import React, { Component } from 'react';
import './skills.scss'
// import $ from "jquery";
// import './tiltedpage-scroll.css'
import myPic from '../../images/testimonial-1.jpeg'
import { FaHome, FaServicestack, FaVideo, FaUserAlt} from 'react-icons/fa';

class Skills extends Component{
    constructor(){
        super()
    }

    // componentDidMount(){
    //     const script = document.createElement("script");

    //     script.src = "./jquery.tiltedpage-scroll.js";

    //     document.body.appendChild(script);

    //     var main = $('.main')
    //     window.$('.main').tiltedpage_scroll({
    //         sectionContainer: "> section",     
    //         angle: 50,                         
    //         opacity: true,          
    //         scale: true,          
    //         outAnimation: true        
    //       });
    // }

    render(){
        return (
            <React.Fragment>
                <div className="main">
                    <section className="skill-contanier">
                        <div className="content">
                            <h1>CREATIVE <span>SKILL</span> SETS</h1>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                            <button type="button" className="btn">Learn More</button>
                        </div>
                    </section>

                    <section className="ideas">
                        <div className="ideas-content">
                            <h1>Main Ideas</h1>
                            <div className="box-contents">
                                <div className="content-box">
                                    <div className="icon">
                                        <FaHome />
                                    </div>
                                    <h3>HTML Expert</h3>
                                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                                </div>
                                <div className="content-box">
                                    <div className="icon">
                                        <FaServicestack/>
                                    </div>
                                    <h3>HTML Expert</h3>
                                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                                </div>
                                <div className="content-box">
                                    <div className="icon">
                                        <FaVideo/>
                                    </div>
                                    <h3>HTML Expert</h3>
                                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                                </div>
                                <div className="content-box">
                                    <div className="icon">
                                        <FaUserAlt/>
                                    </div>
                                    <h3>HTML Expert</h3>
                                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill-details">
                        <div className="lists">
                            <h3>Lists</h3>
                            <ul>
                                <li>Lorem ipsum is placeholder text commonly used in the graphic</li>
                                <li>Lorem ipsum is placeholder text commonly used in the graphic</li>
                                <li>Lorem ipsum is placeholder text commonly used in the graphic</li>
                                <li>Lorem ipsum is placeholder text commonly used in the graphic</li>
                                <li>Lorem ipsum is placeholder text commonly used in the graphic</li>
                                <li>Lorem ipsum is placeholder text commonly used in the graphic</li>
                            </ul>
                        </div>
                        <div className="image-banner">
                            <img src={myPic} />
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Skills;