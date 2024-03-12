import React, {useState, useEffect} from 'react';

const GetInTouch = () => {



  const containerStyle = {
    backgroundColor: '#F6F0E2', // Silverish blue background color
    fontFamily: 'Anta, sans-serif', // Atra font
    textAlign: 'center',
    fontSize: '2.5rem', // Big font size
    minHeight: '100vh', // Changed height to minHeight
    display: 'flex', // Added display flex
    flexDirection: 'column', // Set flex direction to column
    justifyContent: 'space-between', // Space between children
    boxSizing: 'border-box', // Added box-sizing
  };

  const headingStyle = {
    color: '#252524', // White text color for links
    margin: '40px 0', // Adjust margin as needed
  };

  const linkStyle = {
    color: '#252524', // White text color for links
    textDecoration: 'none', // Remove underline from links
    margin: '0 10px', // Adjust margin as needed
    padding: '40px 0',
  };

  const footerStyle = {
    display: 'flex', // Added display flex
    justifyContent: 'space-between', // Space between children
    padding: '5px', // Added padding
    flexShrink: 0, // Prevent footer from shrinking
  };

  return (
    <div>
      
      <div style={containerStyle}>
        <h1 style={headingStyle}>Vara Health</h1>
        <div style={{ flex: 1 }}></div>
        <div style={footerStyle}>
          <a href="https://www.behance.net/your_account" style={linkStyle}>
            BEHANCE
          </a>
          <a href="https://www.instagram.com/your_account" style={linkStyle}>
            INSTAGRAM
          </a>
          <a href="https://www.pinterest.com/your_account" style={linkStyle}>
            PINTEREST
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
