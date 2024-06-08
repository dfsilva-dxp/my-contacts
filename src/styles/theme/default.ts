const theme = {
  grid: {
    container: {
      default: "40rem"
    }
  },

  font: {
    family:
      "Sora, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      thin: 100,
      regular: 400,
      bold: 700
    }
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  colors: {
    background: "#F6F5FC",

    primary: {
      main: "#5061FC",
      light: "#6674F4",
      dark: "#3346F0",
      lighter: "#E0E3FF"
    },

    success: {
      main: "#51CA73"
    },

    danger: {
      main: "#FC5050",
      light: "#F97171",
      dark: "#F63131"
    },

    gray: {
      900: "#222222",
      200: "#BCBCBC",
      100: "#E6E6E6"
    },
    white: "#FFFFFF"
  }
} as const;

export default theme;
