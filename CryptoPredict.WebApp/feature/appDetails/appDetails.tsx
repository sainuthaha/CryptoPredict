
const AppDetails = () => {
  return (
    <header style={headerStyle}>
      <h1 style={textStyle}>BTC Price Predictor</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#121212', // Dark background for the header
  color: '#E0E0E0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  marginBottom: '20px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
  borderBottom: '2px solid #333', // Subtle border for separation
};

const textStyle = {
  margin: '0',
  fontSize: '2.5em',
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  letterSpacing: '2px',
  color: '#BB86FC', // Light purple color for better contrast
  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)', // Darker shadow for more prominence
};

export default AppDetails;
