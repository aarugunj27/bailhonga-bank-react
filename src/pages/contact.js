import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './static/css/style.css';
import NavBar from '../components/NavBar.js';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const form = useRef()
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q1f43z8', 'template_n59dsct', form.current, 'GH5YWbr2rl8SKLiJt')
            /*.then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });*/
        e.target.reset()
           
    };

    return (
        <div>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <NavBar />
            <div className="g-recaptcha" data-sitekey="your_site_key" id="box"><center>
                <form ref={form} onSubmit={sendEmail} method="POST" action="/succes">
                    <h1>Contact Us</h1>
                    <input type="text" name="name" className="name" placeholder="Name" required></input>
                    <input type="email" name="email" className="email" placeholder="Email" required></input>
                    <input type="text" name="subject" className="email" placeholder="Subject" required></input>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
                    <button className="button" type="submit">Submit</button>
                </form>
            </center>
            </div>
        </div>
    )
}

export default Contact;