import { ThemeProvider } from "styled-components";

import { Container, Header } from "@/components";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <Header hasSearchForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
