

import React, { useState, useEffect } from 'react';
import './OurClients.css';


const testimonialsData = [
    {
        id: 1,
        name: 'Thara Hassan',
        title: 'Web Designer',
        image: 'data:image/jpeg;base64,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',
        testimonial: [
            "“My husband and I went for dinner in restaurant X and really enjoyed the atmosphere.",
            "The food was fresh and delicious, and the best part was that the chef sent us",
            "a dessert they created that day. We were delighted to be part of their business.”"
        ]
    },
    {
        id: 2,
        name: 'Jane Cooper',
        title: 'Medical Assistant',
        image: 'data:image/jpeg;base64,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',
        testimonial: [
            "“Jane Cooper's testimonial content goes here.",
            "We were delighted to be part of their business.”"
        ]
    },
    {
        id: 3,
        name: 'Jeon Se-Ri',
        title: 'Nursing Assistant',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s',
        testimonial: [
            "“Jeon Se-Ri's testimonial content goes here.",
            "We were delighted to be part of their business.”"
        ]
    },
    {
        id: 4,
        name: 'Sook Soon-Ei',
        title: 'Marketing Coordinator',
        image: 'https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg',
        testimonial: [
            "“Sook Soon-Ei's testimonial content goes here.",
            "We were delighted to be part of their business.”"
        ]
    },
    {
        id: 5,
        name: 'Cody Fisher',
        title: 'President of Sales',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjD8npJKpnr9pbb6aUgHMAtykS8ju0uIAbqCExOnGphLh9Y6VsgLfYLj10xEFWf5y79c&usqp=CAU',
        testimonial: [
            "“Cody Fisher's testimonial content goes here.",
            "We were delighted to be part of their business.”"
        ]
    },
];
const OurClients = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleProfileClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="testimonial-section">
            <h1>What our clients say</h1>
            <div className="client-profiles">
                {testimonialsData.map((client, index) => (
                    <div
                        key={client.id}
                        className={`client-profile ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleProfileClick(index)} // Handle click event
                    >
                        <img src={client.image} alt={client.name} />
                        <div className="client-profile-text">
                            <p>{client.name}</p>
                            <span>{client.title}</span>
                        </div>
                        
                    </div>
                ))}
            </div>

            <div className="testimonial-message">
                {testimonialsData[activeIndex].testimonial.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
        </div>
    );
};

export default OurClients;