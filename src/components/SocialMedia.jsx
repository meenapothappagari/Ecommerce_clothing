import React from 'react';
import './SocialMedia.css'; // Import the CSS file

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbsnMjfjVNIJmn34OFtNOiq9QmppwujybIA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRvHPnrhcTQtDjquVqDDSrWbDIP_F2A4ZQw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhEiXtuz9CPHZxvP57B95GNKbz-pU_as4Kg&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvQBNLBOKQodG4jeF77sZSk6WLXQjMsvO1V68mzex6wU-jpazgtvfIJFy80Fy_VP-OHY&usqp=CAU',
];

const SocialMedia = () => {
  return (
    <div className="social-media-section">
      <div className="social-media-header">
        <h1>Connect with us</h1>
        <a href="https://www.instagram.com" className="instagram-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="instagram-icon"
          />
          @Instagram
        </a>
      </div>
      <div className="social-media-images">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt={`Social media ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
