const theme = {
  grid: {
    container: {
      sm: "33.75rem",
      md: "45rem",
      lg: "60rem",
      xlg: "71.25rem",
      xxlg: "82.5rem"
    }
  },
  border: {
    radius: "0.25rem",
    outlineOffiset: "0.125rem"
  },

  font: {
    family:
      "Sora, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      regular: 400,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      medium: "1rem", // 16px
      large: "1.125rem", // 18px
      xlarge: "1.25rem", // 20px
      xxlarge: "1.75rem" // 28px
    }
  },

  spacings: {
    xxsmall: "0.5rem", //8px
    xsmall: "1rem", // 16px
    small: "1.5rem", // 24px
    medium: "2rem", // 32px
    large: "2.5rem" // 40px
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  colors: {
    background: "#F6F5FC",

    gray100: "#CCC",
    gray200: "#BCBCBC",
    text: "#222",

    primaryMain: "#5061FC",
    primaryLighter: "#E0E3FF",

    dangerMain: "#FC5050",
    successMain: "#51CA73",

    whiteMain: "#FFFFFF"
  }
} as const;

export default theme;
