import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Container
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageShell from "../components/PageShell";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

import { services, projects, stats } from "../data/siteData";

function Home() {
  return (
    <PageShell className="home-page">
      {/* HERO SECTION */}
      <Box className="hero-section">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography className="hero-label">
                <span className="status-dot" />
                YOUR DIGITAL GROWTH PARTNER
              </Typography>

              <Typography variant="h1" className="hero-title">
                We build digital
                <br />
                experiences that
                <br />
                <span className="gradient-text">move you forward.</span>
              </Typography>

              <Typography className="hero-description">
                From bold ideas to powerful digital products, Nexora
                helps businesses innovate, grow, and stand out in a
                connected world.
              </Typography>

              <Box className="hero-actions">
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                  size="large"
                >
                  Start a Project
                </Button>

                <Button
                  component={Link}
                  to="/projects"
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                  size="large"
                  className="text-button"
                >
                  Explore Work
                </Button>
              </Box>

              <Box className="hero-note">
                <Box className="avatar-stack">
                  <span>J</span>
                  <span>A</span>
                  <span>M</span>
                </Box>
                <Typography>
                  Turning ambitious ideas into reality.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box className="visual-glow" />
              <Box className="visual-orbit orbit-one" />
              <Box className="visual-orbit orbit-two" />

              <Box className="visual-main-card">
                <Typography className="visual-card-label">
                  DIGITAL INNOVATION
                </Typography>
                <Typography className="visual-card-number">
                  01<span>/03</span>
                </Typography>
                <Box className="visual-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </Box>
                <Typography className="visual-card-caption">
                  Ideas become impact.
                </Typography>
              </Box>

              <Box className="floating-card floating-card-top">
                <span className="floating-icon">✦</span>
                <Box>
                  <strong>Creative</strong>
                  <small>Think beyond limits</small>
                </Box>
              </Box>

              <Box className="floating-card floating-card-bottom">
                <span className="floating-icon cyan-icon">↗</span>
                <Box>
                  <strong>Growth focused</strong>
                  <small>Built to scale</small>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* STATS */}
      <Box className="stats-section">
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Box className="stat-item">
                <Typography className="stat-value">
                  {stat.value}
                </Typography>
                <Typography className="stat-label">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* SERVICES */}
      <Box className="home-section">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Solutions designed for what's next."
          description="We combine strategy, creativity, and technology to deliver digital solutions that make a difference."
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.slice(0, 3).map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>

        <Box className="section-action">
          <Button
            component={Link}
            to="/services"
            endIcon={<ArrowForwardIcon />}
            className="text-button"
          >
            View All Services
          </Button>
        </Box>
      </Box>

      {/* FEATURED PROJECTS */}
      <Box className="home-section">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Ideas brought to life."
          description="A selection of digital experiences built around creativity, usability, and measurable impact."
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        <Box className="section-action">
          <Button
            component={Link}
            to="/projects"
            endIcon={<ArrowForwardIcon />}
            className="text-button"
          >
            Explore All Projects
          </Button>
        </Box>
      </Box>

      {/* CTA */}
      <Box className="cta-section">
        <Container maxWidth="md">
          <Typography className="eyebrow" textAlign="center">
            HAVE AN IDEA?
          </Typography>

          <Typography variant="h2" className="cta-title">
            Let's create something
            <span className="gradient-text"> remarkable.</span>
          </Typography>

          <Typography className="cta-description">
            Have a project in mind? Tell us about it and let's make
            it happen.
          </Typography>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            size="large"
          >
            Let's Talk
          </Button>
        </Container>
      </Box>
    </PageShell>
  );
}

export default Home;