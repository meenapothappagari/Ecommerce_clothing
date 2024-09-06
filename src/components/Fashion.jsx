// Fashion.js
import React from 'react';
import './Fashion.css'; // Make sure to create and style this CSS file

const Fashion = () => {
  return (
    <div className='fashion'>
      <h1>You can feel <br /><span>fashion</span> sense.</h1>
      <img 
        src="https://img.freepik.com/premium-photo/woman-wearing-skirt-red-hat-is-holding-red-bag_972478-16267.jpg?size=626&ext=jpg&ga=GA1.1.814101879.1718377277&semt=ais_hybrid" 
        alt="Fashion"
      />
      <div>
        <p>KMR is the right place for you to buy your fashion<br />clothes with a reasonable price and trust.</p>
        <div className='btn'>
          <button className='btn1'>Shop now</button>
          <button className='btn2'>Learn more</button>
        </div>
      </div>
      <div className='photo'>
        <img 
          style={{ width: '680px', height: '500px' }} 
          src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4885.jpg?w=826&t=st=1725597393~exp=1725597993~hmac=a5f0a6e6ef3d97de80b1d21b9578736c84e78f10637b4a8cbd7fbc527591cdc5" 
          alt="Fashion Photo 1"
        />
        <img 
          src="https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-4189.jpg?size=626&ext=jpg&ga=GA1.1.814101879.1718377277&semt=ais_hybrid" 
          alt="Fashion Photo 2"
        />
        <img 
          src="https://img.freepik.com/premium-photo/two-children-wearing-pajamas-with-word-fruit-them_1276068-11604.jpg?size=626&ext=jpg&ga=GA1.1.814101879.1718377277&semt=ais_hybrid" 
          alt="Fashion Photo 3"
        />
      </div>
    </div>
  );
}

export default Fashion;
