import React from 'react';
import {Check2Circle} from 'react-bootstrap-icons';
import '../pages/static/css/success.css';
import { Link } from 'react-router-dom';

function Success() {
    return (
        <div>
            <div className='bg-image'></div>
            <div className='box'>
                <div className='container-1'>
                    <Check2Circle color="green" size={100}/>
                    <h1>Success</h1>
                    <h5>We have recieved you email and we will contact you back soon!</h5>
                    <Link to='/' className='home-2'>Go Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Success;