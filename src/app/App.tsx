import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { DefaultRoutes } from "@/routes";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <DefaultRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
