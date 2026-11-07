import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Box className="service-card-top">
        <Box className="service-icon">
          <Icon />
        </Box>
        <Typography className="service-number">
          {service.number}
        </Typography>
      </Box>

      <Typography variant="h5" className="service-title">
        {service.title}
      </Typography>

      <Typography className="service-description">
        {service.description}
      </Typography>

      <Box className="service-arrow">
        <ArrowOutwardIcon />
      </Box>
    </motion.div>
  );
}

export default ServiceCard;