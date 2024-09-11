

import React, { useState, useEffect } from 'react';
import './OurClients.css';


const testimonialsData = [
    {
        id: 1,
        name: 'Thara Hassan',
        title: 'Web Designer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVzJPb26NCXh2XYP3K1WFrDhF3cUqcLf0ug&s',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRvHPnrhcTQtDjquVqDDSrWbDIP_F2A4ZQw&s',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhEiXtuz9CPHZxvP57B95GNKbz-pU_as4Kg&s',
        testimonial: [
            "“Sook Soon-Ei's testimonial content goes here.",
            "We were delighted to be part of their business.”"
        ]
    },
    {
        id: 5,
        name: 'Cody Fisher',
        title: 'President of Sales',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvQBNLBOKQodG4jeF77sZSk6WLXQjMsvO1V68mzex6wU-jpazgtvfIJFy80Fy_VP-OHY&usqp=CAU',
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