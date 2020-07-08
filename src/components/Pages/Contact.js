import React, { Component } from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter , FaAddressCard, FaMailBulk, FaMobileAlt} from 'react-icons/fa';
import './Pages.scss'
import contactImg from '../../images/contact-us-banner.jpg'

class Contact extends Component{
    constructor(){
        super()
        this.name = React.createRef()
        this.email = React.createRef()
        this.mobile = React.createRef()
        this.message = React.createRef()
        this.state = {
            errors: []
        }
    }

    contactFormSubmit = (event) => {
        event.preventDefault();
        const name = this.name.current.value;
        const email = this.email.current.value;
        const mobile = this.mobile.current.value;
        const errors = this.errorValidation(name, email, mobile);
        alert(`${this.name.current.value} ${this.email.current.value}`)

        if(errors.length > 0) {
            this.setState({
                errors
            })
            return
        }

    }

    errorValidation = (name, email) => {
        const errors = [];
        if (name.length === 0) {
            errors.push("Username cannot be empty");
        }
      
        if (email.length < 6) {
            errors.push("Password should be at least 6 characters long");
        }

        if (email.mobile < 10) {
            errors.push("Mobile number should be at least 10 characters long");
        }
        return errors
    }

    render(){
        const {errors} =  this.state;
        return (
            <React.Fragment>
                <div className="banner-image"></div>
                {/* <img src={contactImg} className="banner-image"/> */}
                <section className="contact-us">
                    <div className="contact-container">
                        <div className="contact-details">
                            <h2>Contact Info</h2>
                            <ul className="details">
                                <li>
                                    <span><FaAddressCard/></span>
                                    <span>3/118a, Belagondapalli, Hosur, 635114</span>
                                </li>
                                <li>
                                    <span><FaMailBulk/></span>
                                    <span>naveenteju17@gmail.com</span>
                                </li>
                                <li>
                                    <span><FaMobileAlt/></span>
                                    <span>8754634732</span>
                                </li>
                            </ul>
                            <ul className="social-media">
                                <li><a target="_blank" href="https://www.youtube.com/chillcitynaveen/"><FaYoutube /></a></li>
                                <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100001546497276"><FaFacebook /></a></li>
                                <li><a arget="_blank" href="https://www.instagram.com/tejunaveen/?hl=en"><FaInstagram /></a></li>
                                <li><a target="_blank" href="https://twitter.com/Naveen83316685"><FaTwitter/></a></li>
                            </ul>
                        </div>
                        <div className="form-container">
                            <h2>Send a message</h2>
                            <form onSubmit={this.contactFormSubmit}>
                                {errors.map(error => <p key={error}>{error}</p>)}
                                <div className="input-wrapper">
                                    <input type="text" id="name" ref={this.name} required/>
                                    <span>Name</span>
                                </div>
                                <div className="input-wrapper">
                                    <input type="email" id="emailId" ref={this.email} required/>
                                    <span>Email</span>
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" id="mobile" ref={this.mobile} required/>
                                    <span>Mobile</span>
                                </div>
                                <div className="input-wrapper">
                                    <textarea type="text" id="message" ref={this.message} required/>
                                    <span>Message</span>
                                </div>
                                <div className="input-wrapper">
                                    <button type="submit" className="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Contact;