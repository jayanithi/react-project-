import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import SectionHeading from "../components/SectionHeading";
import { values, stats } from "../data/siteData";

const valueIcons = [
  <LightbulbOutlinedIcon />,
  <GroupsOutlinedIcon />,
  <WorkspacePremiumOutlinedIcon />
];

function About() {
  return (
    <PageShell className="inner-page">
      <Box className="page-hero">
        <Typography className="eyebrow">ABOUT NEXORA</Typography>
        <Typography variant="h1" className="page-title">
          We believe in the power of
          <span className="gradient-text"> great ideas.</span>
        </Typography>
        <Typography className="page-intro">
          We are a digital-focused team driven by creativity,
          technology, and a passion for solving real-world problems.
        </Typography>
      </Box>

      <Box className="about-story">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="about-image">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1100"
                alt="Nexora team collaborating"
              />
              <Box className="about-image-caption">
                <Typography>Ideas. People. Possibilities.</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="eyebrow">OUR STORY</Typography>
            <Typography variant="h2" className="about-heading">
              Technology with a human perspective.
            </Typography>
            <Typography className="body-copy">
              Nexora was created with a simple belief: technology
              should make things better, easier, and more meaningful.
            </Typography>
            <Typography className="body-copy">
              We bring together design thinking, development
              expertise, and a collaborative mindset to help
              businesses turn ambitious ideas into useful digital
              experiences.
            </Typography>
            <Typography className="body-copy">
              Every project is an opportunity to learn, improve,
              and create something that makes a lasting difference.
            </Typography>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{ mt: 2 }}
            >
              Work With Us
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box className="about-stats">
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

      <Box className="home-section">
        <SectionHeading
          eyebrow="OUR VALUES"
          title="What makes us, us."
          description="The principles that guide our thinking, our work, and the relationships we build."
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={value.title}>
              <Box className="value-card">
                <Box className="value-icon">{valueIcons[index]}</Box>
                <Typography variant="h5">{value.title}</Typography>
                <Typography className="body-copy">
                  {value.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="cta-section">
        <Typography variant="h2" className="cta-title">
          Let's build the future together.
        </Typography>
        <Typography className="cta-description">
          We would love to hear about your next big idea.
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          endIcon={<ArrowOutwardIcon />}
        >
          Get in Touch
        </Button>
      </Box>
    </PageShell>
  );
}

export default About;