import * as React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer.js';


const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
};

const leistungenItemStyles = {
    backgroundColor: colors.darkbrown,
    color: colors.white,
    paddingTop: "40px",
    paddingBottom: "20px",
    width: "100%",
    margin: "0 auto",
    padding: "0 auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};





export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>

                <Box
                    sx={{
                        backgroundImage: `url('/assets/img16.jpg')`, // 1, 3 , 4, 6, 7, 8, 9, 10, 11 ,12, 14, 15
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '100vh', // Ensures it takes at least full viewport height
                        display: 'flex',
                        alignItems: 'center', // Center the content vertically
                        paddingTop: 4, // Add some padding from the top
                        paddingBottom: 4, // Add some padding from the bottom
                    }}
                >


                    <Container maxWidth="false" sx={{
                        maxWidth: { xs: "100%", sm: "1300px" },

                    }}>
                        {/* Welcome Section */}
                        <Box textAlign="center" marginBottom={4}>
                            <Typography variant="h2" component="h1" gutterBottom>
                                Willkommen bei Amel-Bau
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Ihr zuverlässiger Partner für Bauen und Renovieren.
                            </Typography>
                            <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
                                Schreiben Sie uns
                            </Button>
                        </Box>

                        <Box textAlign={'center'} marginBottom={4} >
                            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', ...leistungenItemStyles }}>
                                Jedes Bauprojekt ist eine Herzensangelegenheit.
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Und deswegen ist es unser oberstes Ziel, Ihre architektonische Bauplanung passgenau umzusetzen. Wir sind bei Ihrem Bauprojekt die zentrale Schnittstelle in der Ausführung auf Ihrem Bau.
                                Hierbei sorgen wir unter anderem für die Planung der Bauleistungen, die Koordination auf Ihrer Baustelle, die Gewährleistung der Bauqualität, eine stetige Kostenübersicht und terminliche Koordination. Auch finden wir für Sie das beste Preisleistungsverhältnis bei allen notwendigen Baustoffen für jeden Bereich Ihres Projekts.
                                Mehr über unsere Leistungen und die Aufgaben
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Und deswegen ist es unser oberstes Ziel, Ihre architektonische Bauplanung passgenau umzusetzen. Wir sind bei Ihrem Bauprojekt die zentrale Schnittstelle in der Ausführung auf Ihrem Bau.
                                Hierbei sorgen wir unter anderem für die Planung der Bauleistungen, die Koordination auf Ihrer Baustelle, die Gewährleistung der Bauqualität, eine stetige Kostenübersicht und terminliche Koordination. Auch finden wir für Sie das beste Preisleistungsverhältnis bei allen notwendigen Baustoffen für jeden Bereich Ihres Projekts.
                                Mehr über unsere Leistungen und die Aufgaben
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Und deswegen ist es unser oberstes Ziel, Ihre architektonische Bauplanung passgenau umzusetzen. Wir sind bei Ihrem Bauprojekt die zentrale Schnittstelle in der Ausführung auf Ihrem Bau.
                                Hierbei sorgen wir unter anderem für die Planung der Bauleistungen, die Koordination auf Ihrer Baustelle, die Gewährleistung der Bauqualität, eine stetige Kostenübersicht und terminliche Koordination. Auch finden wir für Sie das beste Preisleistungsverhältnis bei allen notwendigen Baustoffen für jeden Bereich Ihres Projekts.
                                Mehr über unsere Leistungen und die Aufgaben
                            </Typography>
                        </Box>

                        {/* Services Section */}
                        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', ...leistungenItemStyles }}>
                            Leistungen der
                        </Typography>
                        <Grid container spacing={4} justifyContent="center"
                            alignItems="center">
                            <Grid item xs={12} sm={9}>
                                <Box border={1} padding={2} textAlign="center" borderRadius={2}
                                    sx={{
                                        display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '120px'
                                    }}>
                                    <Typography variant="h5" component="h3" gutterBottom >
                                        TrackenBau
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Hochwertige Bauleistungen für Wohn- und Gewerbeprojekte.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Box border={1} padding={2} textAlign="center" borderRadius={2} sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '120px'
                                }}>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        Maurerarbeiten
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Verwandeln Sie Ihre Räume mit unseren fachmännischen Renovierungsdiensten.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Box border={1} padding={2} textAlign="center" borderRadius={2} sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '120px'
                                }}>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        Um - @ Anbauten
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Professionelle Beratung und Projektmanagement für eine reibungslose Umsetzung.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Box border={1} padding={2} textAlign="center" borderRadius={2} sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '120px'
                                }}>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        Maler und Spachtelarbeitenür
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Verwandeln Sie Ihre Räume mit unseren fachmännischen Renovierungsdiensten.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Box border={1} padding={2} textAlign="center" borderRadius={2} sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '120px'
                                }}>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        Putzabeiten
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Verwandeln Sie Ihre Räume mit unseren fachmännischen Renovierungsdiensten.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <Footer />
        </div>

    );
}