import ResponsiveAppBar from '../components/AppBar';
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, Button, Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField } from "@mui/material";
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
};

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 52.379189,  // Set the latitude of your location
    lng: 13.506111,  // Set the longitude of your location
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        privacyAccepted: false,
        consentGiven: false,
        queryType: "",
        captchaError: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
            captchaError: "", // Clear error when input changes
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.checked,
            captchaError: "", // Clear error when checkbox changes
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
            privacyAccepted: false,
            consentGiven: false,
            queryType: "",
            captchaError: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate email before proceeding
        if (!validateEmail(formData.email)) {
            setFormData((prevState) => ({
                ...prevState,
                captchaError: 'Invalid email format',
            }));
            setIsSubmitting(false);
            return;
        }

        // Check privacy and consent acceptance
        if (!formData.privacyAccepted || !formData.consentGiven) {
            setFormData((prevState) => ({
                ...prevState,
                captchaError: 'You must accept privacy and consent terms',
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

        // Use EmailJS to send the form data via email
        try {
            const result = await emailjs.send(
                'service_ulaxpbp',    // Your actual Service ID
                'template_p6rrubq',   // Your actual Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    // Add any additional fields if necessary
                    phone: formData.phone,  // You can add more fields as needed
                    company: formData.company,
                    queryType: formData.queryType,
                },
                '7Bd6i9FWC8sxP8DGI'   // Your actual User ID
            );
            console.log('Email sent successfully:', result.text);
            resetForm();  // Reset the form upon success
        } catch (error) {
            console.error('Error sending email:', error.text);
            setFormData((prevState) => ({
                ...prevState,
                captchaError: 'Failed to send email. Please try again later.',
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
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
            {/* Dropdown for query type */}
            <Select
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                displayEmpty
                sx={{ borderColor: "brown" }}
            >
                <MenuItem value="">
                    <em>Allgemeine Fragen</em>
                </MenuItem>
                <MenuItem value="Angebot">Angebot</MenuItem>
                <MenuItem value="Beschwerde">Beschwerde</MenuItem>
            </Select>

            {/* Form Fields */}
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
                rows={4}
                required
            />

            {/* Privacy & Consent Checkboxes */}
            <FormControlLabel
                control={
                    <Checkbox
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleCheckboxChange}
                    />
                }
                label="Ich habe die Datenschutzerklärung, insbesondere Punkt III., zur Kenntnis genommen."
            />
            <FormControlLabel
                control={
                    <Checkbox
                        name="consentGiven"
                        checked={formData.consentGiven}
                        onChange={handleCheckboxChange}
                    />
                }
                label="Ich willige in die Verarbeitung meiner personenbezogenen Daten zum Zwecke der Kontaktaufnahme ein."
            />

            {formData.captchaError && (
                <p style={{ color: 'red' }}>{formData.captchaError}</p>
            )}

            {/* Submit Button */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{ backgroundColor: colors.orange2 }}
            >
                {isSubmitting ? 'Senden...' : 'Senden'}
            </Button>
        </Box>
    );
};

export default function Kontakt() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                <Grid container spacing={2} marginTop={'40px'} marginBottom={'40px'} sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Left Column: Contact Form */}
                    <Grid item xs={12} md={8}>
                        <ContactForm />
                    </Grid>

                    {/* Right Column: Google Map */}
                    <Grid item xs={12} md={8}>
                        <LoadScript googleMapsApiKey="AIzaSyCyDbweXjJ8pwSuET4WtRKLSRqws40eSNw">
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={14}
                            >
                                {/* Add a marker at the desired location */}
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
};
