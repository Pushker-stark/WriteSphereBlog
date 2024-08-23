import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
        <h1>My Blog</h1>
        <nav>
            <Link>Home</Link>
            <Link>New Post</Link>
        </nav>
    </header>
  )
}

const styles = {
    header: {
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
    },
    title: {
        margin: 0,
    },
    link: {
        color: '#fff',
        margin: '0 10px',
        textDecoration: 'none',
    },
};


export default Header