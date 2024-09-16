


// import React from 'react';
// import './SocialMedia.css'; // Import the CSS file
// import { FaInstagram } from 'react-icons/fa'; // Import from react-icons


// const images = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbsnMjfjVNIJmn34OFtNOiq9QmppwujybIA&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkP4p0aFyxJJ8JfKXyPzKMi3OoRO125BbzUQ&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVSGqvQB1MDE9iTcAaimCs7Z2-iEdQg_nWA&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vWrByzdJ_ywegbS71gYkMz4Lj_BiJYvamg&s',
// ];

// const SocialMedia = () => {
//   return (
//     <div className="social-media-section">
//       <div className="social-media-header">
//         <h1>Connect with us</h1>
//         <a href="https://www.instagram.com" className="instagram-link">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
//             alt="Instagram"
//             className="instagram-icon"
//           />
//           @Instagram
//         </a>
//       </div>
//       <div className="social-media-images">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`image-wrapper ${index === 1 ? 'instagram-hover' : ''}`} // Apply effect to the second image
//           >
//             <img src={image} alt={`Social media ${index}`} />
//             {index === 1 && (
//               <div className="instagram-overlay">
//                 {/* <i className="fab fa-instagram"></i> */}
//                 {/* <FaInstagram id="icon" /> */}
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
//                   alt="Instagram"
//                   className="instagram-icon"
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SocialMedia;



// import React from 'react';
// import './SocialMedia.css'; // Import the CSS file
// import { FaInstagram } from 'react-icons/fa'; // Import from react-icons

// const images = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbsnMjfjVNIJmn34OFtNOiq9QmppwujybIA&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkP4p0aFyxJJ8JfKXyPzKMi3OoRO125BbzUQ&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVSGqvQB1MDE9iTcAaimCs7Z2-iEdQg_nWA&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vWrByzdJ_ywegbS71gYkMz4Lj_BiJYvamg&s',
// ];

// const SocialMedia = () => {
//   return (
//     <div className="social-media-section">
//       <div className="social-media-header">
//         <h1>Connect with us</h1>
//         <a href="https://www.instagram.com" className="instagram-link">
//           <FaInstagram className="instagram-icon" />
//           @Instagram
//         </a>
//       </div>
//       <div className="social-media-images">
//         {images.map((image, index) => (
//           <div key={index} className="image-wrapper">
//             <img src={image} alt={`Social media ${index}`} />
//             <div className="instagram-overlay">
//               <FaInstagram className="overlay-icon" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SocialMedia;





import React from 'react';
import './SocialMedia.css'; // Import the CSS file

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbsnMjfjVNIJmn34OFtNOiq9QmppwujybIA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkP4p0aFyxJJ8JfKXyPzKMi3OoRO125BbzUQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVSGqvQB1MDE9iTcAaimCs7Z2-iEdQg_nWA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vWrByzdJ_ywegbS71gYkMz4Lj_BiJYvamg&s',
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
            <div className="instagram-overlay">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                id="overlay-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
