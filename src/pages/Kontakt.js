import ResponsiveAppBar from '../components/AppBar';
import GooglesMap from '../components/MapGoogle';
import React, { useState } from "react";
import { Box, Button, Alert, Snackbar, Grid, MenuItem, Select, TextField, FormControl, InputLabel } from "@mui/material";
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
    const [errors, setErrors] = useState({});  // Track which fields are invalid
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
            captchaError: "",
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: '',
        }));
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Vor- & Nachname sind erforderlich";
        }

        // Email field
        if (!validateEmail(formData.email)) {
            newErrors.email = "Ungültige E-Mail-Adresse";
        }

        // Phone field (can add additional validation if needed)
        if (!formData.phone) {
            newErrors.phone = "Telefonnummer ist erforderlich";
        }

        // Message field
        if (!formData.message) {
            newErrors.message = "Nachricht ist erforderlich";
        }

        // Query Type field
        if (!formData.queryType) {
            newErrors.queryType = "Anfrageart ist erforderlich";
        }

        return newErrors;
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
        setErrors({});
    };

    // Check if all required fields are filled out
    const isFormValid = () => {
        const {name, email, phone, message, queryType } = formData;
        return   name && email && phone && message && queryType && validateEmail(email);
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
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
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
            setSnackbarMessage('Failed to send email. Please try again later.');
            setOpenSnackbar(true);
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
                boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: 'scale(1)',
                zIndex: -1,
                '&:hover::before': {
                    boxShadow: '0px 30px 30px rgba(255, 165, 0, 0.25)',
                    transform: 'scale(1.05) translateZ(0) !important',
                },
            }}
        >
            <FormControl fullWidth>
                {!formData.queryType && (
                    <InputLabel htmlFor="queryType" sx={{
                        color: formData.queryType ? colors.gray : colors.gray, // Change color if queryType has a value
                        '&.Mui-focused': {
                            transform: 'translate(0, -5px) scale(1)', // Move the label 10px up when focused
                            color: colors.gray, // Change the color when focused (optional)
                        },
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(10px, -8px) scale(0.75)', // Control the position when the label shrinks
                            backgroundColor: 'white', // Background color behind the text when it shrinks
                            padding: '0 4px', // Add padding if necessary
                        },
                    }}>Anfrageart *</InputLabel>
                )}
                <Select
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    sx={{
                        borderColor: errors.queryType ? 'red' : '',
                    }}
                >
                    <MenuItem value="Allgemeine Fragen">
                        <em style={{ color: colors.orange2 }}>Allgemeine Fragen</em>
                    </MenuItem>
                    <MenuItem value="UmAbauten">
                        <em style={{ color: colors.orange2 }} >UmAbauten</em>
                    </MenuItem>
                    <MenuItem value="TrackenBau">
                        <em style={{ color: colors.orange2 }} >TrackenBau</em>
                    </MenuItem>
                    <MenuItem value="UmAbauten">
                        <em style={{ color: colors.orange2 }} >PutzaBeiten</em>
                    </MenuItem>
                    <MenuItem value="TrackenBau">
                        <em style={{ color: colors.orange2 }} >Maurerarbeiten</em>
                    </MenuItem>
                    <MenuItem value="Maler">
                        <em style={{ color: colors.orange2 }} >Malerarbeiten</em>
                    </MenuItem>
                </Select>
            </FormControl>

            <TextField
                name="company"
                label="Firma"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
                fullWidth
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
                rows={8}
                required
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isSubmitting || !isFormValid()}
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
        <>
            <ResponsiveAppBar />
            <Grid container spacing={2} marginTop={'40px'} marginBottom={'0px'} sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                {/*  Contact Form */}
                <Grid item xs={12} md={8}>
                    <ContactForm />
                </Grid>
            </Grid>
            <GooglesMap />
        </>
    );
};
