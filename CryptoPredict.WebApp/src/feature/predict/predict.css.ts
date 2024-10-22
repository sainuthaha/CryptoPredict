import { IStackStyles, ITextStyles, ITextFieldStyles} from "@fluentui/react";

export const stackItemStyles: IStackStyles = {
  root: {
    backgroundColor: '#1E1E2F', // Dark background
    border: '1px solid #333', // Darker border to blend with the theme
    padding: '20px',
    margin: '10px',
    width: '400px',
    borderRadius: '10px',
    color: '#E0E0E0', // Light text color for readability
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)', // Subtle shadow for depth
  },
};

export const stackStyles: IStackStyles = {
  root: {
    backgroundColor: '#121212', // Match the dark theme background
    padding: '20px',
    borderRadius: '8px', // Rounded corners for a smooth appearance
  },
};

export const textStyles: ITextStyles = {
  root: {
    color: '#E0E0E0', // Light text color for readability
    fontSize: '16px', // Adjust font size as needed
    fontWeight: 500, // Medium font weight for better visibility
    backgroundColor: '#1E1E2F', // Match the dark background
    padding: '10px', // Add some padding for spacing
    borderRadius: '5px', // Slight rounding of corners
  },
};

export const styles = {
  countdownContainer: {
    textAlign: 'center',
    margin: '20px 0',
  },
  resultContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    margin: '20px 0',
    padding: '15px',
    borderRadius: '12px',
    backgroundColor: '#fafafa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  resultItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  },
  label: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#007acc',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '25px',
  },
};
