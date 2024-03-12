import React, { useState, useEffect } from 'react';

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
    zIndex: -1,
  },
  honeycombCell: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust cell color and opacity
    borderRadius: '10%', // Adjust cell shape to create honeycomb effect
    transition: 'background-color 1s ease', // Transition for color change
  },
};

const SlideShow = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
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
    const animationInterval = setInterval(() => {
      setAnimationIndex(prevIndex => (prevIndex + 1) % 3);
    }, 2000); // Adjust the interval duration as needed

    return () => clearInterval(animationInterval);
  }, []);

  const words = ["Bodies.", "Health Concerns.", "Nurture an inclusive environment for exchanging insights and stories."];

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Dark semi-transparent overlay */}
      <div style={{ position: 'relative', zIndex: 2, fontFamily: '"Bona Nova", serif', fontWeight: 400, fontStyle: 'italic', marginBottom: '20px', fontSize: '20px' }}>
        <h3 style={{ marginTop: '-40px', letterSpacing:'2px' }}> {/* Adjusting the margin top */}
          Dedicated to educating and empowering women about their
        </h3>
        <div className="animation" style={{ marginTop: '-10px', letterSpacing:'2px', position: 'relative', fontFamily: '"Bona Nova", serif', fontWeight: 400, fontStyle: 'italic'  }}>
          <div className="animation-text" style={{ position: 'absolute', top: 'calc(50% + 30px)', left: '50%', transform: 'translate(-50%, -50%)', opacity: animationIndex === 0 ? 1 : 0, transition: 'opacity 0.5s' }}>{words[0]}</div>
          <div className="animation-text" style={{ position: 'absolute', top: 'calc(50% + 30px)', left: '50%', transform: 'translate(-50%, -50%)', opacity: animationIndex === 1 ? 1 : 0, transition: 'opacity 0.5s' }}>{words[1]}</div>
          <div className="animation-text" style={{ position: 'absolute', top: 'calc(50% + 30px)', left: '50%', transform: 'translate(-50%, -50%)', opacity: animationIndex === 2 ? 1 : 0, transition: 'opacity 0.5s' }}>{words[2]}</div>
        </div>
      </div>
      <div style={{ ...styles.honeycomb, gridTemplateColumns: `repeat(auto-fit, 150px)`, gridAutoRows: `130px`, gap: '5px', }}>
        {/* Honeycomb cells */}
        {Array.from({ length: numOfCells }, (_, index) => (
          <div key={index} style={{ ...styles.honeycombCell }}></div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
