import React from "react";
import './static/css/style.css';
import NavBar from '../components/NavBar.js';
import Footer from "../components/footer";
import { Carousel } from "react-carousel3";
import Image1 from "./static/images/InMemory_SSMoogi.png";
import Image2 from "./static/images/Sahitya_Aaladkatti_IAS.png";
import Image3 from "./static/images/MahantShivyogi.png";
import Image4 from "./static/images/BankPresidents.png";
import Image5 from "./static/images/BoardMemebers.png";

const imgstyles = {
    width: 341.1486486,
    height: 340,
};

function Home() {
    return (
        <div>
            <NavBar />
            <title>Home</title>
            <h1>Home</h1>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Carousel height={500} width={980} yOrigin={42} yRadius={48} autoPlay={true}>
                    <div key={1}>
                        <img alt="" style={imgstyles} src={Image1} />
                    </div>
                    <div key={2}>
                        <img alt="" style={imgstyles} src={Image2} />
                    </div>
                    <div key={3}>
                        <img alt="" style={imgstyles} src={Image3} />
                    </div>
                    <div key={4}>
                        <img alt="" style={imgstyles} src={Image4} />
                    </div>
                    <div key={5}>
                        <img alt="" style={imgstyles} src={Image5} />
                    </div>
                </Carousel>
            </div>
            <Footer />
        </div>
    )
}

export default Home;