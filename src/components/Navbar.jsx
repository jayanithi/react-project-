import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "../data/siteData";

function Navbar({ mode, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar position="sticky" elevation={0} className="navbar">
      <Container maxWidth="lg">
        <Toolbar disableGutters className="navbar-toolbar">
          <Box
            component={Link}
            to="/"
            className="brand"
            onClick={closeDrawer}
          >
            <span className="brand-symbol">N</span>
            <span>NEXORA<span className="brand-dot">.</span></span>
          </Box>

          <Box className="desktop-nav">
            {navigationLinks.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                className="nav-link"
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box className="navbar-actions">
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-toggle"
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              className="nav-cta"
            >
              Let's Talk
            </Button>

            <IconButton
              className="mobile-menu-button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{ className: "mobile-drawer" }}
      >
        <Box className="drawer-header">
          <span className="brand">
            <span className="brand-symbol">N</span>
            NEXORA<span className="brand-dot">.</span>
          </span>

          <IconButton onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={closeDrawer}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box className="drawer-theme">
          <Button
            fullWidth
            variant="outlined"
            onClick={toggleTheme}
            startIcon={
              mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />
            }
          >
            Switch to {mode === "dark" ? "Light" : "Dark"} Mode
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;