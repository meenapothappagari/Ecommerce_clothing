import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AddressPage.css'; // Import the CSS file

const AddressPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userDetails } = location.state || {};

  const [userDetailsState, setUserDetails] = useState({
    name: userDetails ? userDetails.name : '',
    email: userDetails ? userDetails.email : '',
    city: userDetails ? userDetails.city : '',
    state: userDetails ? userDetails.state : '',
    houseNumber: userDetails ? userDetails.houseNumber : '',
    landmark: userDetails ? userDetails.landmark : '',
    alternatePhoneNumber: userDetails ? userDetails.alternatePhoneNumber : '',
    pincode: userDetails ? userDetails.pincode : ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loadingLocation, setLoadingLocation] = useState(false);

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    console.log('User Details before sending:', userDetailsState);

    // Check if the details are not empty before making the request
    if (!userDetailsState.name || !userDetailsState.email || !userDetailsState.city || !userDetailsState.state || !userDetailsState.houseNumber || !userDetailsState.pincode) {
      setResponseMessage('All fields are required!');
      return;
    }

    try {
      // Store the user details in local storage before navigating
      localStorage.setItem('userDeliveryDetails', JSON.stringify(userDetailsState));

      // Navigate to the OrderSummaryPage after submitting the form
      navigate('/order-summary');
    } catch (error) {
      setResponseMessage('Error saving user details.');
      console.error('Error:', error);
    }
  };

  // Function to fetch location using IP-API
  const getLocation = async () => {
    setLoadingLocation(true); // Set loading while fetching location
    try {
      const response = await axios.get('http://ip-api.com/json/');
      const { city, regionName } = response.data;

      setUserDetails((prevDetails) => ({
        ...prevDetails,
        city: city,
        state: regionName
      }));

      setResponseMessage('Location fetched successfully!');
    } catch (error) {
      setResponseMessage('Error fetching location.');
      console.error('Error fetching location:', error);
    } finally {
      setLoadingLocation(false); // Stop loading after fetch
    }
  };

  return (
    <div className="address-page">
      <h1 className="page-title">Delivery Address</h1>
      <form className="address-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userDetailsState.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userDetailsState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City/Town</label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Enter your city/town"
            value={userDetailsState.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            name="state"
            placeholder="Enter your state"
            value={userDetailsState.state}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="location-button" onClick={getLocation} disabled={loadingLocation}>
          {loadingLocation ? 'Fetching Location...' : 'Use Current Location'}
        </button>
        <div className="form-group">
          <label htmlFor="houseNumber">House/Plot Number</label>
          <input
            id="houseNumber"
            type="text"
            name="houseNumber"
            placeholder="Enter your house/plot number"
            value={userDetailsState.houseNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="landmark">Landmark</label>
          <input
            id="landmark"
            type="text"
            name="landmark"
            placeholder="Enter a landmark"
            value={userDetailsState.landmark}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alternatePhoneNumber">Alternate Phone Number</label>
          <input
            id="alternatePhoneNumber"
            type="text"
            name="alternatePhoneNumber"
            placeholder="Enter alternate phone number"
            value={userDetailsState.alternatePhoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            id="pincode"
            type="text"
            name="pincode"
            placeholder="Enter your pincode"
            value={userDetailsState.pincode}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Display response message */}
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default AddressPage;
 