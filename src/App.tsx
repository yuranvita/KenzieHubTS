import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, dark, light } from "./theme/theme";
import { ITheme } from "./types/types";

import AppRoutes from "./AppRoutes";


function App() {
  return (
    <ThemeProvider theme={theme as ITheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
