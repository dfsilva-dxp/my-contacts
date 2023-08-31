import { ThemeProvider } from "styled-components";

import { ContactsList, Container, Header } from "@/components";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <Header hasSearchForm />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
