import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

function Projects() {
  return (
    <PageShell className="inner-page">
      <Box className="page-hero">
        <Typography className="eyebrow">OUR PORTFOLIO</Typography>

        <Typography variant="h1" className="page-title">
          Work that speaks
          <span className="gradient-text"> for itself.</span>
        </Typography>

        <Typography className="page-intro">
          A look at ideas transformed into digital experiences.
          Each project represents a focus on quality, creativity,
          and user experience.
        </Typography>
      </Box>

      <Box className="home-section">
        <SectionHeading
          eyebrow="FEATURED PROJECTS"
          title="Selected work."
          description="Explore a few sample projects from our creative portfolio."
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="portfolio-note">
        <Typography variant="h4">
          Every great project starts with a conversation.
        </Typography>
        <Typography className="body-copy">
          Have an idea you want to bring to life? Let's create
          something valuable together.
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          endIcon={<ArrowOutwardIcon />}
          sx={{ mt: 2 }}
        >
          Start a Project
        </Button>
      </Box>
    </PageShell>
  );
}

export default Projects;