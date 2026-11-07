import React from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";

function PageShell({ children, className = "" }) {
  return (
    <motion.main
      className={`page-shell ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <Container maxWidth="lg">
        <Box>{children}</Box>
      </Container>
    </motion.main>
  );
}

export default PageShell;