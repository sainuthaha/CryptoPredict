import { IButtonStyles, IStackStyles } from "@fluentui/react";

export const stackItemStyles: IStackStyles = {
    root: {
      backgroundColor: '#1E1E2F', // Dark background
      border: '1px solid #333', // Darker border to blend with the theme
      padding: '20px',
      margin: '10px',
      width: '400px',
      borderRadius: '10px',
      color: '#E0E0E0', // Light text color for readability
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)', // Subtle shadow for depth,
      
      display: 'flex', // Enables flexbox layout
      alignItems: 'center', // Vertical centering
      justifyContent: 'center', // Horizontal centering
    },
  };
  
  export const stackStyles: IStackStyles = {
    root: {
      backgroundColor: '#121212', // Match the dark theme background
      padding: '20px',
      borderRadius: '8px', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

 export const buttonStyles: IButtonStyles = {
    root: {
        backgroundColor: "#BB86FC", // Lilac color
        color: "#FFFFFF",
        borderRadius: "8px",
        padding: "12px 24px",
        boxShadow: "0 4px 10px rgba(187, 134, 252, 0.4)", // Subtle lilac shadow
        transition: "background-color 0.3s ease, transform 0.2s ease",
    },};
  