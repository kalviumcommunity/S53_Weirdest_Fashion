import { extendTheme } from "@chakra-ui/react";
const Theme = extendTheme({
  colors: {
    primary: {
      100: "#BE9B85",
      200: "#A17272",
    },
    secondary: {
      300: "#FFFFFF",
      400: "#000000",
    },
  },
  fonts: {
    fonts: {
      logoFont: "'La Belle Aurore",
      welcomeFont: "Alegreya",
      pages: "PlayFair Display",
      embraceText: "Crimson Text",
      explore: "Lato",
    },
  },
});

export default Theme;
