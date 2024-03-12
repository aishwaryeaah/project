import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const DashAbout = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center', 
      height: '100vh', 
      padding: '0 7%', 
      backgroundColor : '#F6F0E2',
    }}>
      <div style={{ position: 'relative', width: '60%', overflow: 'hidden' }}>
        <div 
          style={{ 
            border: '1px solid #6D2D4A', 
            height: '400px',
            position: 'relative', 
            overflow: 'hidden',
          }}
        >
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/ac9177144832671.6293b5bd4f865.png" 
            alt="Your Image" 
            style={{ 
              width: '100%', 
              height: '100%', 
              margin: 0,
              objectFit: 'cover' 
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
            <div style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '-400px', fontSize: '10px'  }}>
              <p>Hover to Know More About the Artist<FontAwesomeIcon icon={faAngleDoubleUp} style={{ marginLeft: '10px' }} /></p>
              </div>            
            )}
            {isHovered && (
              <>
                <p style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', margin: '10px 0 0 0' }}>Art by: Sua Balac</p>
                <p style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', margin: '10px 0 0 0' }}>Link Below to Artist's Behance Page.</p>
                <a href="https://www.behance.net/suabalac" style={{ color: '#FFFFFF', fontSize: '1rem', textAlign: 'left', fontFamily: 'Arial, sans-serif', textDecoration: 'underline', margin: '10px 0 0 0' }}>Let's Go!</a>
              </>
            )}
          </div>
        </div>
      </div>
      <div style={{ width: '35%' }}>
        <h3 style={{ color: '#252524', marginBottom: '6px', fontSize: '1.5rem', fontFamily: 'Bona Nova, serif' }}>ABOUT</h3>
        <h1 style={{ color: '#252524', fontSize: '2rem', fontWeight: '700', fontFamily: 'Anta, sans-serif',fontStyle: 'normal'}}>Explore, Engage, Elevate.</h1>
        <p style={{ color: '#252524', fontFamily: 'Bona Nova, serif', fontWeight: '400',fontStyle: 'normal', lineHeight: '1.6' }}>We’re a women-centric company focused on creating healthcare products and curating scientifically backed information for you.</p>
        <button style={{
          background:'#FB825C',
          border: 'none',
          borderRadius: '0px',
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '20px'
        }}>OUR STORY</button>
      </div>
    </div>
  );
};

export default DashAbout;
