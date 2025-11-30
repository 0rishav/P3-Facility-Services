import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";

import Landing from "./pages/Landing";

import Layout from "./components/Layout";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";
import WhyChoose from "./pages/WhyChoose";

function AppShell() {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Theme appearance={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/why-choose" element={<WhyChoose />} />
        </Routes>
      </Layout>
    </Theme>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
