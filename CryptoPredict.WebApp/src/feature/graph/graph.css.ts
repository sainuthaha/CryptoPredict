export const styles = {
  body: {
    backgroundColor: '#121212', // Dark background
    color: '#E0E0E0', // Light gray text for better readability
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px',
  },
  app: {
    textAlign: 'center',
  },
  h1: {
    color: '#03dac6', // Light teal color for the main heading
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Subtle shadow for depth
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  cryptoChart: {
    backgroundColor: '#1e1e1e', // Darker background for chart containers
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.7)', // Slightly darker shadow
    flex: 1, // Make charts responsive
  },
  h2: {
    color: '#03dac6', // Light teal color for chart headings
  },
  epochTime: {
    marginTop: '20px',
    fontSize: '1.2em',
    color: '#b0b0b0', // Light gray for consistency with paragraph text
  },
  paragraph: {
    color: '#b0b0b0', // Light gray color for text
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the button horizontally
    alignItems: 'center', // Center the button vertically
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#BB86FC', // Purple background for buttons
    color: '#ffffff', // White text for contrast
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '10px',
    selectors: {
      ':hover': {
        backgroundColor: '#3700b3', // Darker purple on hover
      },
    },
  },
  continueButton: {
    backgroundColor: '#ff5722', // Bright color for contrast
    color: '#ffffff', // White text
    selectors: {
      ':hover': {
        backgroundColor: '#e64a19', // Slightly darker on hover
      },
    },
  },
  headerStyle: {
    backgroundColor: '#121212', // Dark background for the header
    color: '#03dac6', // Teal color to match other headings
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    margin: '0',
    fontSize: '1.5em',
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '2px',
    color: '#03dac6', // Teal color for better contrast
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)', // Darker shadow for prominence
  },
};