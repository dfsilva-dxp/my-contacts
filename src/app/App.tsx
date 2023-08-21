import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "@/styles";
import { Container } from "@/components";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <h1>Boilerplate</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
