import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { Grid, Box, Container, CardMedia, Typography, Button } from '@mui/material';
import '../CardAnimations.css';

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
};

export default function CombinedPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                <Container maxWidth="lg" sx={{ mt: 12, mb: 10 }}>
                    <Grid container spacing={4} sx={{ mt: 7 }}>
                        <Grid item xs={12} md={4}>
                            <HoverCard
                                image="/assets/Beratung.jpg"
                                title="Beratung"
                                text="Fragen? Gerne unterstützen wir Sie bei der Planung Ihres Bauprojekts – von der ersten Idee bis zur vollständigen Umsetzung."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <HoverCard
                                image="/assets/Maurerarbeiten.jpg"
                                title="Maurerarbeiten"
                                text="Tragende Wände, Zwischenwände oder Sicht- und Ziermauerwerk aus verschiedensten Steinarten. Bei uns erhalten Sie meisterhafte Qualität!"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <HoverCard
                                image="/assets/Stahlbetonbau.jpg"
                                title="Stahlbetonbau"
                                text="Von Schalarbeiten über komplexe Bewehrungsstrukturen zur Betonage. Wir garantieren präzise Ausführung und detailgetreue Umsetzungen ihrer architektonischen sowie statischen Anforderungen."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <HoverCard
                                image="/assets/Abbruch u. Umbau.jpg"
                                title="Abbruch u. Umbau"
                                text="Fachgerechte Demontage und Durchbrüche. Vertrauen Sie auf unsere Expertise, um Platz für Neues zu schaffen und bestehende Strukturen optimal anzupassen."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <HoverCard
                                image="/assets/Reparaturen u. Sanierung.jpg"
                                title="Reparaturen/Sanierung"
                                text="Wir revitalisieren und reparieren alte oder beschädigte Strukturen. Unsere Sanierungsdienste stellen die Integrität Ihres Eigentums wieder her und verbessern sowohl die Funktionalität als auch die Wohnqualität."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <HoverCard
                                image="/assets/Gartengestaltung.jpg"
                                title="Gartengestaltung"
                                text="Ob Sie eine idyllische Rückzugsoase oder einen praktischen und stilvollen Außenbereich wünschen – wir planen und realisieren Ihren Traumgarten, inklusive der Verlegung von Pflastersteinen und Terrassenplatten."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer sx={{ mt: 5 }} />
        </div>
    );
}

function HoverCard({ image, title, text }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check window size to determine if it's mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Assuming mobile is below 768px width
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set state
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box
            className="hover-card"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)', // Scale on hover
                },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardMedia
                component="img"
                height={300}
                image={image}
                alt={title}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Title always visible (only for Desktop) */}
            {!isMobile && !isHovered && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: colors.white,
                        padding: '0px 5px',
                        borderRadius: '5px',
                    }}
                >
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: colors.white }}>
                        {title}
                    </Typography>
                </Box>
            )}

            {/* Title and Text shown on hover */}
            {isHovered && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: colors.white,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: colors.white }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" textAlign="center" px={2}>
                        {text}
                    </Typography>
                </Box>
            )}

            {/* Mobile Content */}
            {isMobile && !isHovered && (
                <Box sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: colors.white }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                        {text}
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
