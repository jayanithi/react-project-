import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <Link to="/" className="brand footer-brand">
              <span className="brand-symbol">N</span>
              <span>NEXORA<span className="brand-dot">.</span></span>
            </Link>

            <Typography className="footer-description">
              We transform ideas into meaningful digital experiences.
              Let's build something extraordinary together.
            </Typography>

            <Box className="social-links">
              <IconButton aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography className="footer-heading">Explore</Typography>
            <Box className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography className="footer-heading">Get in touch</Typography>
            <Typography className="footer-contact">
              hello@nexora.com
            </Typography>
            <Typography className="footer-contact">
              +91 98765 43210
            </Typography>
            <Link to="/contact" className="footer-contact-link">
              Start a project <ArrowOutwardIcon fontSize="small" />
            </Link>
          </Grid>
        </Grid>

        <Box className="footer-bottom">
          <Typography>
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </Typography>
          <Typography>Designed for ideas that move forward.</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;