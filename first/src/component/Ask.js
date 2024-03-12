import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const DashAsk = () => {
  const [headingAnimation, setHeadingAnimation] = useState('');
  const [paragraphAnimation, setParagraphAnimation] = useState('');
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', // Ensure equal spacing between children
      alignItems: 'center', 
      height: '100vh', // Ensure full viewport height
      padding: '0 7%', // Adjust padding to control spacing from page ends
      backgroundColor : '#F6F0E2',
    }}>
      <div style={{ width: '35%'  }}>
        <h4 className={headingAnimation} style={{ color: '#252524', fontFamily:'"Bona Nova", serif', marginBottom: '10px', fontSize: '1.5rem' }}>ASK</h4>
        <h3 className={headingAnimation} style={{ color: '#252524', fontSize: '2rem', fontWeight: '700', fontFamily: 'Anta, sans-serif',fontStyle: 'normal' }}>Ask, Learn, Empower.</h3>
        <p className={paragraphAnimation} style={{ color: '#252524', fontFamily: 'Bona Nova, serif', fontWeight: '400',fontStyle: 'normal', lineHeight: '1.6' }}>"Hey ladies! Explore your health journey fearlessly. Ask about wellness, curiosity, and more. Let's empower each other to thrive!"</p>
        <button style={{
          background: '#FB825C',
          border: 'none',
          borderRadius: '0px',
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '20px'
        }}>ASK AWAY!</button>
      </div>
      <div style={{ position: 'relative', width: '60%', overflow: 'hidden' }}>
        <div style={{ 
            border: '1px solid #6D2D4A', 
            height: '400px',
            position: 'relative', 
            overflow: 'hidden',
        }}>
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/478278147112679.62bc7005d8fae.png" 
            alt="Your Image" 
            style={{ 
              width: '100%', 
              height: '100%', 
              margin: 0,
              objectFit: 'cover' // Crop the image to cover the container
            }} 
          />
          <div 
            style={{
              position: 'absolute',
              bottom: isHovered ? 0 : '-100%',
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              transition: 'bottom 0.5s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Center the artist details
              justifyContent: 'center', // Center vertically
              padding: '20px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isHovered && (
            <div style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '-400px', fontSize: '10px' }}>
              <p>Hover to Know More About the Artist<FontAwesomeIcon icon={faAngleDoubleUp} style={{ marginLeft: '10px' }} /></p>
              </div>            
            )}
            {isHovered && (
              <>
                <p style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', margin: '10px 0 0 0' }}>Art by: Clémence Thune</p>
                <p style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', margin: '10px 0 0 0' }}>Link Below to Artist's Behance Page.</p>
                <a href="https://www.behance.net/clemencethune" style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'left', fontFamily: 'Arial, sans-serif', textDecoration: 'underline', margin: '10px 0 0 0' }}>Let's Go!</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashAsk;
