
export const styles = ({
  body: {
    backgroundColor: '#121212', // Dark background
    color: '#ffffff', // White text
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px',
  },
  app: {
    textAlign: 'center',
  },
  h1: {
    color: '#03dac6', // Light teal color for the main heading
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
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    flex: 1, // Make charts responsive
  },
  h2: {
    color: '#03dac6', // Light teal color for chart headings
  },
  epochTime: {
    marginTop: '20px',
    fontSize: '1.2em',
  },
  paragraph: {
    color: '#b0b0b0', // Light gray color for text
  },
  button: {
    backgroundColor: '#6200ea',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '10px',
    selectors: {
      ':hover': {
        backgroundColor: '#3700b3',
      },
    },
  },
  continueButton: {
    backgroundColor: '#ff5722', // Different color for contrast
    selectors: {
      ':hover': {
        backgroundColor: '#e64a19',
      },
    },
  },
});

