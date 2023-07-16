import React from "react";
import './static/css/style.css';
import NavBar from '../components/NavBar.js';
import Footer from "../components/footer";
//import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Home() {
    return (
        <div>
            <NavBar/>
            <title>Home</title>
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}

export default Home;