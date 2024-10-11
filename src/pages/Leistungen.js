import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
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
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="320"
                            image="/assets/img8.jpg"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h6" gutterBottom sx={{ color: colors.orange2 }}>
                                UmAbauten
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Unsere Leistungsbereiche umschließen den kompletten Trockenbau Bereich vom Einfamilienhaus oder Mehrfamilienhäuser bis hin zu Büro- und Verwaltungsgebäuden.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Ob es nun um die Deckengestaltung, Leichtbau-Wände, Ständerwerke, Brandschutz oder den Dachgeschossausbau geht. Wir erledigen Trockenbauarbeiten aller Art. Sprechen Sie uns mit Ihrer individuellen Planung an.
                            </Typography>
                        </CardContent>
                    </Card>
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
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="340"
                            image="/assets/img15.jpg"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                TrackenBau
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Unsere Leistungsbereiche umschließen den kompletten Trockenbau Bereich vom Einfamilienhaus oder Mehrfamilienhäuser bis hin zu Büro- und Verwaltungsgebäuden.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Ob es nun um die Deckengestaltung, Leichtbau-Wände, Ständerwerke, Brandschutz oder den Dachgeschossausbau geht. Wir erledigen Trockenbauarbeiten aller Art. Sprechen Sie uns mit Ihrer individuellen Planung an.
                            </Typography>
                        </CardContent>
                    </Card>
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
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/img17.jpg"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            height: '300px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                Putzarbeiten sind nicht jedermanns Sache.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Ihr alter Putz sieht einfach nicht mehr gut aus oder löst sich von der Wand – kein Problem! Wir entfernen und erneuern gerne alles für Sie, egal ob Innen- oder Außenputz.
                            </Typography>
                        </CardContent>
                    </Card>
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
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/img11.jpg"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important' ,
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                Maurerarbeiten
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Vom Entkernen Ihrer Räume, Überarbeitung Ihres Mauerwerks, bis hin zum Anbau oder kompletten Umbau Ihrer Immobilie.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Ob es dabei um Reparaturen, Sanierungen oder Modernisierungen geht – wir bieten Ihnen qualitativ hochwertige Lösungen.
                            </Typography>
                        </CardContent>
                    </Card>
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
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/img7.jpg"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: '0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                Malerarbeiten
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Vom Tapezieren, Streichen bis hin zur Fassadengestaltung. Wir bieten eine Vielzahl an Maler- und Renovierungsarbeiten für den Innen- und Außenbereich an.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
