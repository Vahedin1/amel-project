import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Link } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer.js';
import '../CardAnimations.css';
import { keyframes } from '@mui/system';

const slideIn = keyframes`
0% {
    transform: translateX(-100%);
    opacity: 0;
}
100% {
    transform: translateX(0);
    opacity: 1;
}
`;

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
    black: "#000000",
};

const titleItemStyles = {
    color: colors.white,
    fontWeight: 600,
};

const backgroundColorTitle = {
    backgroundColor: colors.white,
    color: colors.black,
};

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
                    {/* Logo Image on Left */}
                    <Box
                        component="img"
                        src="/assets/logo sa slogan2.png" // Adjust the path if needed
                        alt="Logo and Slogan"
                        sx={{
                            position: 'absolute',
                            top: {xs: '10%', md: '30%'},
                            left: {xs: '0%', md: '0%'},
                            width: { xs: '100%', md: '40%' },
                            zIndex: 2,
                        }}
                    />

                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            minHeight: { xs: '100vh', md: '100vh' },
                            backgroundImage: `url('/assets/Homesite.jpg')`,
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
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        }}
                    />

                    <Box sx={{ animation: `${slideIn} 1s ease-out`, position: 'relative', zIndex: 1 }}>
                        <Typography variant="h5" component="h1" gutterBottom sx={{ ...titleItemStyles, fontSize: { xs: '1.2rem', sm: '2rem' } }}>
                            Willkommen bei Unger Bau
                        </Typography>
                        <Typography variant="h6" color="textSecondary" sx={{ animation: `${slideIn}, 1s ease-out`, ...titleItemStyles }}>
                            Ihr zuverlässiger Partner für Bauen und Renovieren.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            style={{ marginTop: '40px', transition: 'transform 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                            onClick={handleKontaktClick}
                            sx={{ backgroundColor: colors.orange }}
                        >
                            Schreiben Sie uns
                        </Button>
                    </Box>
                </Box>

                {/* Content Section */}
                <Container maxWidth="false" sx={{ maxWidth: { xs: "100%", sm: "1300px" }, margin: "0 auto", marginBottom: '100px' }}>
                    {/* Content goes here */}
                </Container>
            </div>
            <Footer />
        </div>
    );
}
