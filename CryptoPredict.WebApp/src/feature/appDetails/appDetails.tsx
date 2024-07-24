import React from 'react';

const AppDetails = () => {
  return (
      <header style={headerStyle}>
      <h1 style={textStyle}>BTC Price Predictor</h1>
    </header>
  )
}

const headerStyle: React.CSSProperties = {
  backgroundColor: '#00008B',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  marginBottom: '20px'
}

const textStyle: React.CSSProperties = {
  margin: '0'
}

export default AppDetails;  
