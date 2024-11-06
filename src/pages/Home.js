import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Link } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer.js';
import '../CardAnimations.css';
import { keyframes } from '@mui/system';

const slideIn = keyframes`
0% { transform: translateX(-100%); opacity: 0; }
100% { transform: translateX(0); opacity: 1; }
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

const fadeIn = {
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
};

export default function Home() {
    const navigate = useNavigate();

    const handleKontaktClick = () => navigate('/kontakt');
    const handleLeistungenClick = () => navigate('/leistungen');
    const handleUberUnsClick = () => navigate('/überuns');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                {/* Background Image Box with Overlay */}
                <Box
                    sx={{
                        position: 'relative',
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
                            zIndex: 1,
                        },
                    }}
                />

                {/* Content Box for Logo and Text */}
                <Box
                    sx={{
                        ...fadeIn,
                        animation: 'fadeIn 2s ease-out',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: {xs :'0px', sm:'25px'},
                        zIndex: 2,  // Ensures content stays above overlay
                    }}
                >
                    {/* Logo Image */}
                    <Box
                        component="img"
                        src="/assets/logo sa slogan2.png"
                        alt="Logo and Slogan"
                        sx={{
                            width: { xs: '70%', sm: '40%' }, // Adjust size based on screen size
                            marginBottom: 0,
                        }}
                    />

                    {/* Centered Content Container */}
                    <Container maxWidth="sm" sx={{ textAlign: 'center', zIndex: 2 }}>
                        {/* Welcome Text */}
                        <Typography
                            variant="h5"
                            component="h1"
                            gutterBottom
                            sx={{ ...titleItemStyles, fontSize: { xs: '1.5rem', sm: '2rem' }, mb: 0 }}
                        >
                            Willkommen bei Unger Bau
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            sx={{ animation: `${slideIn} 1s ease-out`, ...titleItemStyles, mb: 0 }}
                        >
                            Ihr zuverlässiger Partner für Bauen und Renovieren.
                        </Typography>

                        {/* Button */}
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: colors.orange,
                                paddingX: 0.5,
                                paddingY: 0.5,
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                marginTop: 0,
                                width: 'auto',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.05)' },
                            }}
                            onClick={handleKontaktClick}
                        >
                            Schreiben Sie uns
                        </Button>
                    </Container>
                </Box>

                {/* Main Content Section */}
                <Box sx={{ padding: 3, maxWidth: { xs: "100%", sm: "1300px" }, margin: '0 auto', marginTop: 2 }}>
                    <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '2rem' } }}>
                        Herzlich Willkommen bei Unger Bau, ihrem Meisterbetrieb für Maurer- und Stahlbetonbau
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Gegründet auf langjähriger Erfahrung in der Baubranche, bieten wir als junges Kleinunternehmen frische Perspektiven und passende Lösungen für Ihr Bauvorhaben.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Unsere Spezialgebiete umfassen Maurer- und Betonarbeiten, die sowohl für Neubauten als auch für Anbauten grundlegend sind, sowie die Sanierung und Modernisierung bestehender Bauten.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Unser weiteres Angebot entnehmen sie unserem
                        <Link href="#" onClick={handleLeistungenClick} color='#0000FF'> Leistungsverzeichnis</Link>.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Als Ihr lokaler Baupartner legen wir großen Wert auf direkte Kommunikation und transparente Prozesse. Wir verstehen, dass jedes Projekt einzigartig ist, und bieten daher maßgeschneiderte Lösungen, die genau auf Ihre Bedürfnisse und Wünsche zugeschnitten sind. Zuverlässigkeit und Pünktlichkeit stehen bei uns an erster Stelle, damit ihr Bauvorhaben reibungslos und termingerecht realisiert wird.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Kontaktieren Sie uns für eine persönliche Beratung und erfahren Sie, wie wir Ihr Projekt mit Engagement und Fachkompetenz zum Erfolg führen können. Wir freuen uns darauf, Ihre Bauprojekte mit Ihnen gemeinsam zu verwirklichen!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Noch unsicher? Dann erfahren Sie noch mehr <Link href="#" onClick={handleUberUnsClick} color='#0000FF'>über uns</Link>.
                    </Typography>
                </Box>

                {/* Footer Section */}
                <Footer />
            </div>
        </div>
    );
}
