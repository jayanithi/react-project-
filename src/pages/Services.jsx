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
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteData";

function Services() {
  return (
    <PageShell className="inner-page">
      <Box className="page-hero">
        <Typography className="eyebrow">OUR SERVICES</Typography>

        <Typography variant="h1" className="page-title">
          Everything you need to
          <span className="gradient-text"> grow digitally.</span>
        </Typography>

        <Typography className="page-intro">
          From the first idea to the final product, we provide
          technology and creative services that move your business
          forward.
        </Typography>
      </Box>

      <Box className="home-section services-page-grid">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="Our expertise, your advantage."
          description="Explore our services and discover how we can help bring your ideas to life."
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="process-section">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="Simple steps. Meaningful results."
          description="We keep our process transparent, collaborative, and focused on your goals."
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[
            {
              number: "01",
              title: "Discover",
              description:
                "We understand your goals, audience, and project requirements."
            },
            {
              number: "02",
              title: "Plan & Design",
              description:
                "We create a clear strategy and design an experience around your users."
            },
            {
              number: "03",
              title: "Build",
              description:
                "We develop, test, and refine your solution with attention to detail."
            },
            {
              number: "04",
              title: "Launch",
              description:
                "We help you launch confidently and plan the next improvements."
            }
          ].map((step) => (
            <Grid item xs={12} sm={6} md={3} key={step.number}>
              <Box className="process-card">
                <Typography className="process-number">
                  {step.number}
                </Typography>
                <Typography variant="h5">{step.title}</Typography>
                <Typography className="body-copy">
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="cta-section">
        <Typography variant="h2" className="cta-title">
          Have a challenge in mind?
        </Typography>
        <Typography className="cta-description">
          Let's discuss how the right digital solution can help.
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          endIcon={<ArrowOutwardIcon />}
        >
          Discuss Your Project
        </Button>
      </Box>
    </PageShell>
  );
}

export default Services;