import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { dark, getTheme, ligth, ThemeName } from "./style/theme";
import ThemeSwicher from "./components/header/ThemeSwicher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwicher />
      <Layout children={<Home />} />      
    </BookStoreThemeProvider>

  );
}

export default App;
