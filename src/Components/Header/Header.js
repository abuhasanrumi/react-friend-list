import React from 'react';

const Header = () => {
    const headerStyle={
        backgroundColor: '#4064AC',
        color: "#ffffff"
    }
    return (
        <div style={headerStyle}>
            <h1 style={{margin: "0", padding: '10px', textAlign: 'center'}}>Friend List</h1>
        </div>
    );
};

export default Header;