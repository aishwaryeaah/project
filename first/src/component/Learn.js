import React, { useEffect, useState } from 'react';
import './Learn.css'; // Import the CSS file

const DashLearn = () => {
  const [numOfCells, setNumOfCells] = useState(0);

  useEffect(() => {
    const calculateNumOfCells = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const cellWidth = 150; // Adjust cell width as needed
      const cellHeight = 130; // Adjust cell height as needed
      const gap = 5; // Adjust gap between cells as needed

      const numOfColumns = Math.floor(containerWidth / (cellWidth + gap));
      const numOfRows = Math.floor(containerHeight / (cellHeight + gap));
      const totalCells = numOfColumns * numOfRows;

      return totalCells;
    };

    const handleResize = () => {
      const totalCells = calculateNumOfCells();
      setNumOfCells(totalCells);
    };

    // Initial calculation
    const initialNumOfCells = calculateNumOfCells();
    setNumOfCells(initialNumOfCells);

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = '#F6F0E2'; // Set default background color
  }, []);
  const styles = {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      overflow: 'hidden', // Ensure the background doesn't overflow
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(246, 240, 226, 0.6)', // Dark semi-transparent background
      zIndex: 1,
    },
    content: {
      zIndex: 2,
      fontFamily: 'Anta', // Changed to Georgia font
      fontSize: '50px',
      color: '#4E4637',
      position: 'relative', // Ensure it's above the overlay
    },
    honeycomb: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 150px)', // Adjust column width as needed
      gridAutoRows: '130px', // Adjust row height as needed
      gap: '5px', // Adjust gap between honeycomb cells
      zIndex: -1,
    },
    honeycombCell: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust cell color and opacity
      borderRadius: '10%', // Adjust cell shape to create honeycomb effect
    },
  };
  
    const [animationIndex, setAnimationIndex] = useState(0);
  
    useEffect(() => {
      const animationInterval = setInterval(() => {
        setAnimationIndex(prevIndex => (prevIndex + 1) % 3);
      }, 2000); // Adjust the interval duration as needed
  
      return () => clearInterval(animationInterval);
    }, []);
  
    const words = ["Bodies.", "Health Concerns.", "Nurture an inclusive environment for exchanging insights and stories."];
  
  return (
    <div>
    <div style={styles.container}>
    <div style={styles.overlay}></div> {/* Dark semi-transparent overlay */}
    <div style={{ position: 'relative', zIndex: 2, fontFamily: '"Bona Nova", serif', fontWeight: 400, fontStyle: 'italic', marginBottom: '40px', fontSize: '20px', padding:'5rem' }}>
      <p style={{fontFamily: '"Bona Nova", serif', maxWidth: '50%', position: 'relative',  margin: '0 auto', letterSpacing: '2px', wordSpacing: '5px'}}>
      <h3 style={{ color: '#252524', marginBottom: '6px', fontSize: '1.5rem' }}>LEARN</h3>
        <h1 style={{ color: '#252524', fontSize: '2rem', fontWeight: '700', fontFamily: 'Anta, sans-serif',fontStyle: 'normal'}}>Decode Health Mysteries.</h1>
Women should prioritize their health and well-being by staying informed about their bodies, maintaining proper hygiene, and addressing health concerns promptly. This awareness empowers them to make informed decisions and leads to a healthier, happier life.</p>
    </div>
    <div style={styles.honeycomb}>
      {/* Honeycomb cells */}
      {Array.from({ length: numOfCells }, (_, index) => (
          <div key={index} style={{ ...styles.honeycombCell }}></div>
      ))}
    </div>
    </div>
    <div className="dash-container">
      <div className="dash-row">
        <DashLearnImage
          imageSrc="https://source.unsplash.com/random/300x400?1"
          title="Make your choice right now!"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?"
          link="https://example.com/1"
          bodyColor="#86B971"
        />
        <DashLearnImage
          imageSrc="https://source.unsplash.com/random/300x400?2"
          title="Another Title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          link="https://example.com/2"
          bodyColor="#DEE8C2"
        />
        <DashLearnImage
          imageSrc="https://source.unsplash.com/random/300x400?3"
          title="Title Three"
          text="Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi."
          link="https://example.com/3"
          bodyColor="#D26D50"
        />
      </div>
      <div className="dash-row">
        <DashLearnImage
          imageSrc="https://source.unsplash.com/random/300x400?1"
          title="Make your choice right now!"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?"
          link="https://example.com/1"
          bodyColor="#86B971"
        />
        <DashLearnImage
          imageSrc="https://source.unsplash.com/random/300x400?2"
          title="Another Title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          link="https://example.com/2"
          bodyColor="#DEE8C2"
        />
        <DashLearnImage
          imageSrc="https://source.unsplash.com/random/300x400?3"
          title="Title Three"
          text="Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi."
          link="https://example.com/3"
          bodyColor="#D26D50"
        />
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
        {/* Button */}
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#FB825C', border: 'none', borderRadius: '0px', cursor: 'pointer' }}>KNOW MORE</button>
      </div>
    </div>
  );
}

const DashLearnImage = ({ imageSrc, title, text, link, bodyColor }) => {
  const handleMouseEnter = () => {
    document.body.style.transition = 'background-color 0.3s ease'; // Smooth transition
    document.body.style.backgroundColor = bodyColor; // Change body color when image is hovered
  };

  const handleMouseLeave = () => {
    document.body.style.transition = 'background-color 0.3s ease'; // Smooth transition
    document.body.style.backgroundColor = '#F6F0E2';
  };

  return (
    <div className="dash-learn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dash-learn__content">
        <h3 className="dash-learn__title" style={{ fontFamily: 'Anta, serif' }}>
          {title}
        </h3>
        <p className="dash-learn__text" style={{ fontFamily: 'Bona Nova, serif', letterSpacing:'2px' }}>{text}</p>
        <a href={link} className="dash-learn__link">
          <span>Read More</span>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>        
        </a>
      </div>
      <img src={imageSrc} alt="Random Image" />
    </div>
  );
}

export default DashLearn;
