import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Button, Box, Card } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer.js';
import '../CardAnimations.css';

// Define keyframes for fade-in

// Colors object
const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
};

// Title and background styles
const titleItemStyles = {
    color: colors.orange,
    fontWeight: 600,
};

const backgroundColorTitle = {
    backgroundColor: colors.darkbrown,
    color: colors.white,
};

// Home component
export default function Home() {
    const navigate = useNavigate();

    const handleKontaktClick = () => {
        navigate('/kontakt');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                {/* Welcome Section */}
                <Box
                    textAlign="center"
                    sx={{
                        animation: 'fadeIn 2s ease-out',
                        position: 'relative',
                        height: '900px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        paddingTop: 4,
                        paddingBottom: 4,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%',
                            backgroundImage: `url('/assets/img16.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            '::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Black overlay
                            },
                        }}
                    />

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={titleItemStyles}>
                            Willkommen bei Amel-Bau
                        </Typography>
                        <Typography variant="h6" color="textSecondary" sx={titleItemStyles}>
                            Ihr zuverlässiger Partner für Bauen und Renovieren.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{ marginTop: '40px', transition: 'transform 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                            onClick={handleKontaktClick}
                        >
                            Schreiben Sie uns
                        </Button>
                    </Box>
                </Box>

                {/* Content Section */}
                <Container maxWidth="false" sx={{ maxWidth: { xs: "100%", sm: "1300px" }, margin: "0 auto" }}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '100px',
                            marginTop: { xs: '50px', md: '110px' },
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <Box textAlign={'center'} marginBottom={4}>
                            <Typography className='tkt' variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', ...backgroundColorTitle }} style={{ marginBottom: '40px' }}>
                                Jedes Bauprojekt ist eine Herzensangelegenheit.
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                                Und deswegen ist es unser oberstes Ziel, Ihre architektonische Bauplanung passgenau umzusetzen...
                            </Typography>
                            <Box sx={{ borderBottom: "2px solid #444", marginY: "20px" }} />
                            <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                                Und deswegen ist es unser oberstes Ziel, Ihre architektonische Bauplanung passgenau umzusetzen...
                            </Typography>
                            <Box sx={{ borderBottom: "2px solid #444", marginY: "20px" }} />
                            <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                                Und deswegen ist es unser oberstes Ziel, Ihre architektonische Bauplanung passgenau umzusetzen...
                            </Typography>
                        </Box>
                    </Card>

                    {/* Services Section */}
                    <Grid container spacing={4} justifyContent="center" alignItems="center" marginBottom='150px'>
                        <Grid item xs={12} sm={12} md={3}>
                            <Card
                                sx={{
                                    backgroundColor: '#f5f5f5',  // Light gray background
                                    color: '#333',
                                    height: { md: '250px', xs: '150px' },
                                    widht: '150px',
                                    textAlign: 'center',             // Text color
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                                    transition: '0.3s',              // Smooth transition
                                    '&:hover': {
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',  // Larger shadow on hover
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: colors.orange2 }}>
                                    TrackenBau
                                </Typography>
                                <Typography>
                                    Hochwertige Bauleistungen für Wohn- und Gewerbeprojekte.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>

                            <Card
                                sx={{
                                    backgroundColor: '#f5f5f5',  // Light gray background
                                    height: { md: '250px', xs: '150px' },
                                    widht: '150px',
                                    textAlign: 'center',
                                    color: '#333',               // Text color
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                                    transition: '0.3s',              // Smooth transition
                                    '&:hover': {
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',  // Larger shadow on hover
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: colors.orange2 }}>
                                    Maurerarbeiten
                                </Typography>
                                <Typography color="textSecondary">
                                    Verwandeln Sie Ihre Räume mit unseren fachmännischen Renovierungsdiensten.
                                </Typography>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Card
                                sx={{
                                    backgroundColor: '#f5f5f5',  // Light gray background
                                    color: '#333',
                                    height: { md: '250px', xs: '150px' },
                                    widht: '150px',
                                    textAlign: 'center',              // Text color
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                                    transition: '0.3s',              // Smooth transition
                                    '&:hover': {
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',  // Larger shadow on hover
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: colors.orange2 }}>
                                    Um - @ Anbauten
                                </Typography>
                                <Typography color="textSecondary">
                                    Professionelle Beratung und Projektmanagement für eine reibungslose Umsetzung.
                                </Typography>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Card
                                sx={{
                                    backgroundColor: '#f5f5f5',  // Light gray background
                                    color: '#333',
                                    height: { md: '250px', xs: '150px' },
                                    widht: '150px',
                                    textAlign: 'center',              // Text color
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                                    transition: '0.3s',              // Smooth transition
                                    '&:hover': {
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',  // Larger shadow on hover
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: colors.orange2 }}>
                                    Maler und Spachtelarbeiten
                                </Typography>
                                <Typography color="textSecondary">
                                    Verwandeln Sie Ihre Räume mit unseren fachmännischen Renovierungsdiensten.
                                </Typography>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Card
                                sx={{
                                    backgroundColor: '#f5f5f5',  // Light gray background
                                    color: '#333',
                                    height: { md: '250px', xs: '150px' },
                                    widht: '150px',
                                    textAlign: 'center',            // Text color
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                                    transition: '0.3s',              // Smooth transition
                                    '&:hover': {
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',  // Larger shadow on hover
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: colors.orange2 }}>
                                    Putzarbeiten  {/* Corrected spelling */}
                                </Typography>
                                <Typography color="textSecondary">
                                    Verwandeln Sie Ihre Räume mit unseren fachmännischen Renovierungsdiensten.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>

                </Container>

            </div>
            <Footer />
        </div >
    );
}