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
            <Footer />
        </div>
    )
}

export default Contact;