import React, { useMemo, useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("nexora-theme") || "dark"
  );

  const location = useLocation();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#8b5cf6"
          },
          secondary: {
            main: "#06b6d4"
          },
          background: {
            default: mode === "dark" ? "#090b14" : "#f7f8fc",
            paper: mode === "dark" ? "#111525" : "#ffffff"
          },
          text: {
            primary: mode === "dark" ? "#f8fafc" : "#151827",
            secondary: mode === "dark" ? "#a4acc0" : "#626b80"
          }
        },
        typography: {
          fontFamily: "'DM Sans', sans-serif",
          h1: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700
          },
          h2: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700
          },
          h3: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700
          },
          h4: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700
          },
          button: {
            textTransform: "none",
            fontWeight: 700
          }
        },
        shape: {
          borderRadius: 14
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 10,
                padding: "11px 22px"
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 18
              }
            }
          }
        }
      }),
    [mode]
  );

  const toggleTheme = () => {
    const nextMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
    localStorage.setItem("nexora-theme", nextMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={`app app-${mode}`}>
        <Navbar mode={mode} toggleTheme={toggleTheme} />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;