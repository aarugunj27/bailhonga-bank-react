import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './static/css/style.css';
import NavBar from '../components/NavBar.js';
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const Contact = () => {
    const form = useRef()
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();

        emailjs.sendForm('service_q1f43z8', 'template_n59dsct', form.current, 'GH5YWbr2rl8SKLiJt')
        navigate('/success');

    };

    return (
        <div>
            <NavBar />
            <div id="box"><center>
                <form ref={form} onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    <input type="text" name="name" className="name" placeholder="Name" required></input>
                    <input type="email" name="email" className="email" placeholder="Email" required></input>
                    <input type="text" name="subject" className="email" placeholder="Subject" required></input>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
                    <button className="button" type="submit">Submit</button>
                </form>
            </center>
            </div>
            <div className="google-map-container">
                <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d98312.13780160029!2d-75.74434732848013!3d39.64399094183802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSubway!5e0!3m2!1sen!2sus!4v1689015457918!5m2!1sen!2sus" allowfullscreen loading="lazy" className="google-map" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default Contact;