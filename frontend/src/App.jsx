import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Theme } from "@radix-ui/themes";
import About from "./pages/About";

import Landing from './pages/Landing';

import Layout from './components/Layout';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

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

