import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';

const PageHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <Link to="/"> {/* Link to the dashboard */}
          <img src="logo.png" alt="Logo" style={styles.logo} />
        </Link>
      </div>
      <div style={styles.right}>
        <span style={styles.navItem}>ASK</span>
        <span style={styles.navItem}>ABOUT</span>
        <Link to="/learn" style={styles.navItem}>LEARN</Link>
        <span style={styles.navItem}><FaSearch /></span>
        <span style={styles.navItem}><FaUser /></span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    backgroundColor: '#F6F0E2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    zIndex: 9999,
    transition: 'top 0.3s',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 30px',
    fontFamily: 'ANTA, sans-serif',
    fontSize: '16px',
  },
};

export default PageHeader;
