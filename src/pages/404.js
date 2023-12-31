import React from "react";
import './static/css/404.css';
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="pagenotfound">
            <h1 className="greeting">Whoops!</h1>
            <p className="explanation">We can't seem to find the page you are looking for.</p>
            <div className="center">
                <div className="bouncing-text">
                    <p className="n">4</p>
                    <p className="c">0</p>
                    <p className="e">4</p>
                </div>
            </div>
            <div className="container1">
                <Link className="errorlink" to="/"><button className="home">Go Home!</button></Link>
            </div>
        </div>
    )
}

export default PageNotFound;