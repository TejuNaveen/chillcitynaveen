import React, { Component } from 'react';
import './About.scss'
import aboutImg from '../../images/bg-1.jpeg'
import banner from '../../images/co.png'
class About extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <React.Fragment>
                <section className='aboutus-container'>
                    <div className="content">
                        <h1>About Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <img src={banner} className="about-us-banner-image"/>
                </section>
                 <svg className="wave"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L24,90.7C48,85,96,75,144,106.7C192,139,240,213,288,229.3C336,245,384,203,432,160C480,117,528,75,576,64C624,53,672,75,720,112C768,149,816,203,864,197.3C912,192,960,128,1008,117.3C1056,107,1104,149,1152,186.7C1200,224,1248,256,1296,256C1344,256,1392,224,1416,208L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                 <div className="main-content">
                    <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 </div>
            </React.Fragment>
        )
    }
}

export default About;