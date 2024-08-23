import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={styles.container}>
            <Header />
            <main style={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        flex: 1,
        padding: '20px',
    },
};

export default Layout;
