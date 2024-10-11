"use client";

import ResponsiveAppBar from '../components/AppBar';
import GooglesMap from '../components/MapGoogle';
import React, { useState } from "react";
import { Box, Button, Alert, Snackbar, Grid, MenuItem, Select, TextField } from "@mui/material";
import emailjs from 'emailjs-com';

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
    darkYellow: "#DAA520",
};




const ContactForm = () => {
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        queryType: "",
        captchaError: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
            captchaError: "",
        }));
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const resetForm = () => {
        setFormData({
            company: "",
            name: "",
            email: "",
            phone: "",
            message: "",
            queryType: "",
            captchaError: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!validateEmail(formData.email)) {
            setFormData((prevState) => ({
                ...prevState,
                captchaError: 'Invalid email format',
            }));
            setIsSubmitting(false);
            return;
        }

        console.log('Sending email with data:', {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            phone: formData.phone,
            company: formData.company,
            queryType: formData.queryType,
        });

        try {
            const result = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    phone: formData.phone,
                    company: formData.company,
                    queryType: formData.queryType,
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            );
            console.log('Email sent successfully:', result.text);
            resetForm();
            setSnackbarMessage('Form submitted successfully!');
            setOpenSnackbar(true);

        } catch (error) {
            console.error('Error sending email:', error);
            const errorMessage = error.response?.data?.error || 'Failed to send email. Please try again later.';
            setFormData((prevState) => ({
                ...prevState,
                captchaError: errorMessage,
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            className="slide-card"
            sx={{
                maxWidth: 600,
                margin: "0 auto",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "8px",
                border: "1px solid #ddd",
            }}
        >
            <Select
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                displayEmpty
                sx={{ borderColor: "brown" }}
            >
                <MenuItem value="">
                    <em style={{ color: colors.orange2 }}>Allgemeine Fragen</em>
                </MenuItem>
                <MenuItem value="Angebot">Angebot</MenuItem>
                <MenuItem value="Beschwerde">Beschwerde</MenuItem>
            </Select>

            <TextField
                name="company"
                label="Firma"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                name="name"
                label="Vor- & Nachname"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                name="email"
                label="E-Mail"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                name="phone"
                label="Telefonnummer"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                name="message"
                label="Nachricht"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{ backgroundColor: colors.orange2 }}
            >
                {isSubmitting ? 'Senden...' : 'Senden'}
            </Button>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default function Kontakt() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                <Grid container spacing={2} marginTop={'40px'} marginBottom={'0px'} sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    {/*  Contact Form */}
                    <Grid item xs={12} md={8}>
                        <ContactForm />
                    </Grid>
                </Grid>
                <GooglesMap />
            </div>
        </div>
    );
};