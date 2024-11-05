import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Grid, Typography, Box, CardMedia, Container, Button } from '@mui/material';
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
            <div style={{ flex: '1 0 auto', marginTop: '150px', marginBottom: '150px' }}>
                <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                    <Grid container spacing={4}>
                        {cardData.map((card, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <HoverCard
                                    image={card.image}
                                    title={card.title}
                                    text={card.text}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

function HoverCard({ image, title, text }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            className="hover-card"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                sx={{ width: '100%', objectFit: 'cover' }}
            />
            <Box sx={{ padding: 2, textAlign: 'center', }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: expanded ? 'none' : 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {text}
                </Typography>
                {text.length > 100 && ( // Adjust length condition as needed
                    <Button
                        size="small"
                        onClick={handleExpandClick}
                        sx={{ mt: 1, color: colors.orange }}
                    >
                        {expanded ? 'View Less' : 'View More'}
                    </Button>
                )}
            </Box>
        </Box>
    );
}

// Sample card data
const cardData = [
    { image: "/assets/Beratung.jpg", title: "Beratung", text: "Fragen? Gerne unterstützen wir Sie bei der Planung Ihres Bauprojekts – von der ersten Idee bis zur vollständigen Umsetzung." },
    { image: "/assets/Maurerarbeiten.jpg", title: "Maurerarbeiten", text: "Tragende Wände, Zwischenwände oder Sicht- und Ziermauerwerk aus verschiedensten Steinarten. Bei uns erhalten Sie meisterhafte Qualität!" },
    { image: "/assets/Stahlbetonbau.jpg", title: "Stahlbetonbau", text: "Von Schalarbeiten über komplexe Bewehrungsstrukturen zur Betonage. Wir garantieren präzise Ausführung und detailgetreue Umsetzungen ihrer architektonischen sowie statischen Anforderungen." },
    { image: "/assets/Abbruch u. Umbau.jpg", title: "Abbruch u. Umbau", text: "Fachgerechte Demontage und Durchbrüche. Vertrauen Sie auf unsere Expertise, um Platz für Neues zu schaffen und bestehende Strukturen optimal anzupassen." },
    { image: "/assets/Reparaturen u. Sanierung.jpg", title: "Reparaturen/Sanierung", text: "Wir revitalisieren und reparieren alte oder beschädigte Strukturen. Unsere Sanierungsdienste stellen die Integrität Ihres Eigentums wieder her und verbessern sowohl die Funktionalität als auch die Wohnqualität." },
    { image: "/assets/Gartengestaltung.jpg", title: "Gartengestaltung", text: "Ob Sie eine idyllische Rückzugsoase oder einen praktischen und stilvollen Außenbereich wünschen – wir planen und realisieren Ihren Traumgarten, inklusive der Verlegung von Pflastersteinen und Terrassenplatten." },
];
