import ResponsiveAppBar from '../components/AppBar'; import React, { useState } from "react";
import {Box, Button, Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField,} from "@mui/material";

import Footer from '../components/Footer';


const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
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
        captcha: "",
        captchaError: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log("Form submitted", formData);
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
                value={formData.queryType || ""}
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

            {/* Submit Button */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ backgroundColor: colors.orange2 }}
            >
                Senden
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
                    <Grid item xs={12} md={8} >
                        <ContactForm />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}