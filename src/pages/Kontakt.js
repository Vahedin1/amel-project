import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, Button, Alert, Snackbar, Grid, MenuItem, Select, TextField, Avatar, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
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

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 43.268032,
    lng: 20.013592,
};

const CustomMarker = ({ label }) => {
    return (
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Typography variant="caption" sx={{ marginBottom: '4px', color: colors.orange2, textAlign: 'center' }}>
                {label}
            </Typography>
            <Avatar sx={{ bgcolor: colors.orange2, width: 40, height: 40 }}> {/* Adjust size here */}
                <LocationOnIcon sx={{ color: 'white' }} />
            </Avatar>
        </div>
    );
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
    const address = "Alte Dorfstraße 28, 14542 Werder/Have";

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

                                <div
                                    style={{
                                        position: 'absolute',
                                        transform: 'translate(-50%, -100%)', // This keeps it centered
                                        left: `${(center.lng + 180) * (100 / 360)}%`, // Adjust longitude position
                                        top: `${(90 - center.lat) * (100 / 180)}%`, // Adjust latitude position
                                        zIndex: 1
                                    }}>
                                    <CustomMarker label={address} />
                                </div>

                            </GoogleMap>
                        </LoadScript>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
};