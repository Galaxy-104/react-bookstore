import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwicher from "./components/header/ThemeSwicher";
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
