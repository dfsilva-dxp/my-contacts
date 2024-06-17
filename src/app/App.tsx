import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { DefaultRoutes } from "@/routes";

import { DefaultTheme, GlobalStyles } from "@/styles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <ToastContainer
          autoClose={3000}
          theme="colored"
          icon={false}
          position="bottom-right"
        />
        <DefaultRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
