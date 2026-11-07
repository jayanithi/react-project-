import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import PageShell from "../components/PageShell";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please enter your message.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Message should contain at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Frontend demo only: no email or backend submission is configured.
    setSnackbarOpen(true);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <PageShell className="inner-page contact-page">
      <Box className="page-hero">
        <Typography className="eyebrow">CONTACT US</Typography>

        <Typography variant="h1" className="page-title">
          Let's start a
          <span className="gradient-text"> conversation.</span>
        </Typography>

        <Typography className="page-intro">
          Have a project, question, or idea? Send us a message.
          We'd love to hear from you.
        </Typography>
      </Box>

      <Grid container spacing={5} className="contact-layout">
        <Grid item xs={12} md={5}>
          <Box className="contact-info">
            <Typography variant="h4">
              We'd love to hear from you.
            </Typography>

            <Typography className="body-copy">
              Tell us a little about what you're planning. Our team
              will be happy to discuss the next steps.
            </Typography>

            <Box className="contact-detail">
              <Box className="contact-detail-icon">
                <EmailOutlinedIcon />
              </Box>
              <Box>
                <Typography className="contact-detail-label">
                  Email us
                </Typography>
                <Typography>hello@nexora.com</Typography>
              </Box>
            </Box>

            <Box className="contact-detail">
              <Box className="contact-detail-icon">
                <PhoneOutlinedIcon />
              </Box>
              <Box>
                <Typography className="contact-detail-label">
                  Call us
                </Typography>
                <Typography>+91 98765 43210</Typography>
              </Box>
            </Box>

            <Box className="contact-detail">
              <Box className="contact-detail-icon">
                <LocationOnOutlinedIcon />
              </Box>
              <Box>
                <Typography className="contact-detail-label">
                  Location
                </Typography>
                <Typography>India</Typography>
              </Box>
            </Box>

            <Box className="contact-gradient-card">
              <Typography variant="h5">
                Have a big idea?
              </Typography>
              <Typography>
                Great things happen when good ideas meet the right
                people.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >
            <Typography variant="h4" className="form-title">
              Send us a message
            </Typography>

            <Grid container spacing={2.5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  error={Boolean(errors.subject)}
                  helperText={errors.subject}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={5}
                  label="Tell us about your project"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  className="submit-button"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
        >
          Form validated successfully. Connect a backend to receive messages.
        </Alert>
      </Snackbar>
    </PageShell>
  );
}

export default Contact;