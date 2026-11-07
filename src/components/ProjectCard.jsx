import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
    >
      <Card className="project-card" elevation={0}>
        <Box className="project-image-wrapper">
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            className="project-image"
          />
          <Box className="project-image-overlay">
            <ArrowOutwardIcon />
          </Box>
        </Box>

        <CardContent className="project-content">
          <Typography className="project-category">
            {project.category}
          </Typography>

          <Typography variant="h5" className="project-title">
            {project.title}
          </Typography>

          <Typography className="project-description">
            {project.description}
          </Typography>

          <Box className="project-tags">
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;