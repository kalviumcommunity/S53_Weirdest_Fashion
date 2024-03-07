import { extendTheme } from "@chakra-ui/react";

// Extend the default Chakra UI theme
const Theme = extendTheme({
  // Define custom colors
  colors: {
    primary: {
      100: "#BE9B85", // Light shade of primary color
      200: "#A17272", // Darker shade of primary color
    },
    secondary: {
      300: "#FFFFFF", // Light shade of secondary color (white)
      400: "#000000", // Dark shade of secondary color (black)
    },
  },
  // Define custom fonts
  fonts: {
    fonts: {
      logoFont: "La Belle Aurore", // Custom font for logos
      welcomeFont: "Alegreya", // Custom font for welcome messages
      pages: "PlayFair Display", // Custom font for pages
      embraceText: "Crimson Text", // Custom font for text sections
      explore: "Lato", // Custom font for exploration sections
      italian: "Italianno",
      Kota: "Kotta One",
      Jua: "Jua",
    },
  },
});

export default Theme;
