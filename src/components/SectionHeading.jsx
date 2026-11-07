import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  return (
    <motion.div
      className={`section-heading section-heading-${align}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <Typography className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
        </Typography>
      )}

      <Typography variant="h2" className="section-title">
        {title}
      </Typography>

      {description && (
        <Typography className="section-description">
          {description}
        </Typography>
      )}
    </motion.div>
  );
}

export default SectionHeading;