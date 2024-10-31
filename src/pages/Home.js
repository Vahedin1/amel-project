import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer.js';
import '../CardAnimations.css';

import { keyframes } from '@mui/system';

// Define the slide-in animation
const slideIn = keyframes`
0% {
    transform: translateX(-100%); /* Start off-screen to the left */
    opacity: 0; /* Start transparent */
}
100% {
    transform: translateX(0); /* End at the original position */
    opacity: 1; /* Fully opaque */
}
`;


// Colors object
const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
    black: "#000000",
};

// Title and background styles
const titleItemStyles = {
    color: colors.white,
    fontWeight: 600,
};

const backgroundColorTitle = {
    backgroundColor: colors.white,
    color: colors.black,
};

// Home component
export default function Home() {
    const navigate = useNavigate();

    const handleKontaktClick = () => {
        navigate('/kontakt');
    };
    const fadeIn = {
        '@keyframes fadeIn': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
        },
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                {/* Welcome Section */}
                <Box
                    textAlign="center"
                    sx={{
                        ...fadeIn,
                        animation: 'fadeIn 2s ease-out',
                        position: 'relative',
                        height: { xs: '900px', md: "1000px" },
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
                            width: '100%',
                            minHeight: { xs: '100vh', md: '100vh' },
                            backgroundImage: `url('/assets/home.webp')`,
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

                    <Box
                        sx={{ animation: `${slideIn} 1s ease-out`, position: 'relative', zIndex: 1 }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ ...titleItemStyles, fontSize: { xs: '1.2rem', sm: '2rem' } }}>
                            Willkommen bei Amel-Bau
                        </Typography>
                        <Typography variant="h6" color="textSecondary" sx={{ animation: `${slideIn}, 1s ease-out`, ...titleItemStyles }}>
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
                <Container maxWidth="false" sx={{ maxWidth: { xs: "100%", sm: "1300px" }, margin: "0 auto", marginTop: "50px" }}>

                    <Box textAlign={'center'} marginBottom={4}>
                        <Typography className='tkt' variant="h2" component="h2" gutterBottom sx={{ textAlign: 'center', ...backgroundColorTitle }} style={{ marginBottom: '40px' }}>
                            Jedes Bauprojekt ist eine Herzensangelegenheit.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                            Und deswegen ist es unser oberstes Ziel, Ihre architektonische Bauplanung passgenau umzusetzen. Wir sind bei Ihrem Bauprojekt die zentrale Schnittstelle
                            in der Ausführung auf Ihrem Bau.
                            Hierbei sorgen wir unter anderem für die Planung der Bauleistungen, die Koordination auf Ihrer Baustelle, die Gewährleistung der Bauqualität, eine stetige Kostenübersicht und
                            terminliche Koordination.
                            Auch finden wir für Sie das beste Preisleistungsverhältnis bei allen notwendigen Baustoffen für jeden Bereich Ihres Projekts.
                        </Typography>
                        <Box sx={{ borderBottom: "2px solid #444", marginY: "20px" }} />
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                            Wir können bereits auf mehr als 10 Jahre Erfahrung rund um den Bau zurückblicken. Hierbei handelt es sich sowohl um die praktische Ausführung von Bauprojekten,
                            als auch eine zuverlässige Planung und Koordinierung von Baustellen.
                            Dies kommt uns nicht nur zugute, wenn es darum geht die Qualität Ihres Bauprojekts stetig Hoch zu halten, sondern auch wichtige Details zu erkennen und für eine
                            optimale und hochwertige Bauausführung zu sorgen.
                        </Typography>
                        <Box sx={{ borderBottom: "2px solid #444", marginY: "20px" }} />
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                            In über 10 Jahren Bauerfahrung haben wir eine Vielzahl von Bauprojekten betreut, geplant und abgeschlossen.
                            <br />
                            Ein Schwerpunkt unserer Arbeit lag in dieser Zeit auf dem Ausbau von Neubauten, der Sanierung von Altbauten, Terrassen und Balkonen, Klinkerarbeiten sowie Außenwand-Abdichtungen.
                        </Typography>
                    </Box>
                </Container>

            </div>
            <Footer />
        </div >
    );
}