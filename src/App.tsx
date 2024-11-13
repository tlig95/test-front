import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/shared/layout";
import { ThemeProvider } from "./components/theme-provider";
import Router from "./routes/routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
