import React from 'react';
import { FaTruck, FaClock, FaStar, FaShieldAlt } from 'react-icons/fa';
import './WhyChooseUs.css'; // Add your CSS file

const WhyChooseUs = () => {
    return (

        <div className="why-choose-us">
            <div className='choose'>
                <h1>why choose us</h1>
                <button className='choosebtn'>shopnow</button>
            </div>

            <div className="main-div">
                <div className="feature">
                    <FaTruck className="icon" />
                    <h2>Fast Delivery</h2>
                    <p> We take care of the set-up process, aggregating all your existing online.</p>
                </div>
                <div className="feature">
                    <FaClock className="icon" />
                    <h2>24/7 Delivery</h2>
                    <p> Respond and resolve your customer queries instantly by implementing</p>
                </div>
                <div className="feature">
                    <FaStar className="icon" />
                    <h2>4.9 Ratings</h2>
                    <p>Here's to the people who leave online reviews! So you can take your decision.</p>
                </div>
                <div className="feature">
                    <FaShieldAlt className="icon" />
                    <h2>10 Year Service</h2>
                    <p>Check out our years of service awards, program tips, and strategies to celebrate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
