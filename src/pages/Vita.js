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
                display: 'flex',         // Flexbox to align content
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',     // Center vertically
            }}>

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
                <Grid container spacing={4} alignItems="center" justifyContent={'center'} >
                    {/* Left Side - Image  sx={{ padding: 0, margin: 0, boxShadow: 'none', border: 'none' }}*/}
                    <Grid item xs={12} md={3}> {/* Set md to 3 to leave space for text */}
                        <Card
                            className="slide-card"
                            sx={{
                                marginTop: '150px',
                                padding: '0',
                                display: 'flex',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                marginBottom: { xs: '0px', md: '225px' },
                                boxShadow: 'none',
                                border: 'none',
                                transition: '0.3s',              // Smooth transition
                                '&:hover': {
                                    transform: 'scale(1.05) !important',      // Slight scaling effect on hover
                                },
                            }}>
                            <CardContent
                            >
                                <Avatar
                                    src="/assets/person.webp" // Replace with actual image URL
                                    alt="Person Image"
                                    sx={{
                                        width: 300, height: 340, borderRadius: 0, objectFit: 'cover',  // Ensures the image covers the box nicely
                                        border: 'none',      // Remove any borders if present
                                        boxShadow: 'none',   // Remove any shadow effect
                                        padding: '0',        // Ensure no padding around the image}}
                                        outline: 'none',
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Center - Text */}
                    <Grid item xs={12} md={6}> {/* Set md to 6 for text */}
                        <Box
                            className="slide-card"
                            sx={{
                                marginBottom: '200px',
                                marginTop: { xs: '0px', md: '110px' },
                                color: '#333',               // Text color
                                '&:hover': {
                                    transform: 'scale(1.05) !important',
                                },
                            }}
                        >
                            <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                <Typography className='tkt' variant="h6" component='h2' gutterBottom sx={{ color: colors.black }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                <VitaContent />
            </div>
            <Footer />
        </div>
    );
}