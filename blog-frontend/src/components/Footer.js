import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <p>© 2024 My Blog. All rights reserved.</p>
    </footer>
  );
}

const styles = {
    footer: {
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

export default Footer;