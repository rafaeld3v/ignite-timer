import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { CycleContextProvider } from "./contexts/CyclesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
