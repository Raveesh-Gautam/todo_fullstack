import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.brand}>Todo Application</h1>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/addUser" style={styles.navLink}>Add User</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: '#333',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
  },
  brand: {
    margin: 0,
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    padding: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
