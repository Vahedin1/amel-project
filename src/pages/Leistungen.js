import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import React from 'react';
import { Grid, Typography, Box, CardMedia, Container } from '@mui/material';
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
                <SectionUmAnbauten />
                <SectionTrackenBau />
                <SectionPutzabeiten />
                <SectionMaurerarbeiten />
                <SectionMaler />
            </div>
            <Footer />
        </div>
    );
}

function SectionUmAnbauten() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="320"
                            image="/assets/L-UmA.webp"
                            alt="Drywall construction"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            color: '#333',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                            borderRadius: '8px',
                            padding: '16px',
                            margin: '8px'
                        }}
                    >
                        <Typography variant="h6" gutterBottom sx={{ color: colors.black }}>
                            UmAbauten
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Bei einem Umbau von bestehenden Gebäuden werden überwiegend Sanierungen im Innenbereich vorgenommen. Dabei kann entweder der vorhandene Grundriss
                            umgestaltet oder das Dachgeschoss beziehungsweise allgemein der Innenbereich ausgebaut werden.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionTrackenBau() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="340"
                            image="/assets/L-Tracken.webp"
                            alt="Drywall construction"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            color: '#333',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                            borderRadius: '8px',
                            padding: '16px',
                            margin: '8px'
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ color: colors.black }}>
                            TrackenBau
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Büroräume und Innenausbau oder einfach nur renovierungsbedingte Trockenbauarbeiten? Unsere Leistungsbereiche umschließen den kompletten Trockenbau.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionPutzabeiten() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/L-Putza.webp"
                            alt="Drywall construction"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            color: '#333',
                            height: '300px',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                            borderRadius: '8px',
                            padding: '16px',
                            margin: '8px'
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ color: colors.black }}>
                            Putzarbeiten
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Putzarbeiten sind nicht jedermanns Sache. Ihr alter Putz sieht einfach nicht mehr gut aus oder löst sich von der Wand
                            – kein Problem! Wir entfernen und erneuern gerne alles für Sie, egal ob Innen- oder Außenputz.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionMaurerarbeiten() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/L-Maurer.webp"
                            alt="Drywall construction"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            color: '#333',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                            borderRadius: '8px',
                            padding: '16px',
                            margin: '8px'
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ color: colors.black }}>
                            Maurerarbeiten
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Ebenfalls zu unserem Spektrum gehören natürlich die Maurer- und Betonarbeiten. Das Kerngeschäft unseres Unternehmens beinhaltet die Ausführung
                            sämtlicher Maurerarbeiten. Hierzu zählen der Neubau von kleineren Anbauten, Umbauarbeiten oder auch die Kompletterrichtung von Einfamilienhäusern
                            oder Wohn- und Geschäftshäusern.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionMaler() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/L-Maler.webp"
                            alt="Drywall construction"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            color: '#333',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05) !important',
                            },
                            borderRadius: '8px',
                            padding: '16px',
                            margin: '8px'
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ color: colors.black }}>
                            Malerarbeiten
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Egal ob weiß oder doch lieber Farbe, wir erfüllen ihn jeden Wunsch und helfen gerne bei der Umsetzung ihrer Träume.
                            Die alte Tapete sieht einfach nicht mehr gut aus sie wollen was Modernes auch kein Problem wir entfernen ihre Tapete Spachteln und Schleifen ihre Wände
                            in Q3 Qualität für eine Optimale glatte Wand.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}



