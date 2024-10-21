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
    marginTop: '50px',
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
