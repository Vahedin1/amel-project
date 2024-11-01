import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Grid, Card, CardContent, Typography, Avatar, Box, Container } from '@mui/material';
import '../CardAnimations.css';

const VitaContent = () => {
    const colors = {
        white: "#FFFFFF",
        orange: "#FF6A1A",
        brown: "#532912",
        gray: "#7A7979",
        orange2: "#AA4D1B",
        darkbrown: "#29180E",
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container
                maxWidth="false"
                sx={{
                    maxWidth: { xs: "100%", sm: "1300px" },
                    margin: "0 auto",
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    {/* Left Side - Image */}
                    <Grid item xs={12} md={3}>
                        <Card
                            className="slide-card"
                            sx={{
                                marginTop: '200px',
                                display: 'flex',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                marginBottom: { xs: '0px', md: '200px' },
                                boxShadow: 'none',
                                border: 'none',
                                transition: '0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05) !important',
                                },
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: 300, // Set your desired width
                                        height: 400, // Set your desired height
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        src="/assets/Vita.jpg" // Replace with actual image URL
                                        alt="Person Image"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain', // Ensures the entire image is visible
                                            borderRadius: 0,
                                            border: 'none',
                                            boxShadow: 'none',
                                            padding: 0,
                                            outline: 'none',
                                        }}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Center - Text */}
                    <Grid item xs={12} md={6}>
                        <Box
                            className="slide-card"
                            sx={{
                                marginBottom: '150px',
                                marginTop: { xs: '0px', md: '110px' },
                                color: '#333',
                                textAlign: 'center',
                                '&:hover': {
                                    transform: 'scale(1.05) !important',
                                },
                            }}
                        >
                            <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                <Typography className="tkt" variant="h5" component="h2" gutterBottom sx={{ color: colors.black, fontWeight: 'bold' }}>
                                    Einer, der den Bau kennt: Sowohl aus nächster Nähe.
                                </Typography>
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                Seit seinem 17. Lebensjahr ist Roberto Swarovsky als Handwerker tätig. Nach einer erfolgreich abgeschlossenen Ausbildung zum Maurer sammelte er vielseitige praktische Erfahrungen auf dem Bau. 2017 erlangte er seinen Meistertitel. Bis zum Jahr 2019 war Roberto Swarovsky Angestellter Bauleiter.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Nun ist es sein Ziel, langjährige Erfahrung in die Ausführung und Leitung Ihres Bauvorhabens einzubringen. Fundament ist für ihn hier das kontinuierliche Zusammenspiel aus Planung, Koordination und Kontrolle, sowie die stetige Absprache mit Ihnen, dem Bauherren. Sein oberstes Credo jedoch: Qualität geht vor Quantität. Besonders auf dem Bau.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// About us page
export default function Vita() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                <VitaContent />
            </div>
            <Footer />
        </div>
    );
}
