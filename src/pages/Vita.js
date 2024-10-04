import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Grid, Card, CardContent, Typography, Avatar, Box, Container } from '@mui/material';



const handleLogoClick = () => {
    // Handle the logo click action here (e.g., redirect to homepage)
    window.location.href = '/';
};

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
};
const logo = (
    <img src="/assets/logo-test.png" alt="Logo" style={{ height: "120px" }} />
);


const VitaContent = () => {
    return (
        <Container
            maxWidth="false"
            sx={{
                maxWidth: { xs: "100%", sm: "1300px" },
                margin: "0 auto",
                marginTop: "0 auto",
            }}
        >
            <Grid container spacing={4} alignItems="center" margin={'50px 0 50px 0'}>
                {/* Left Side - Image */}
                <Grid item xs={12} md={3}> {/* Set md to 3 to leave space for text */}
                    <Card>
                        <CardContent>
                            <Avatar
                                src="/assets/person.jpg" // Replace with actual image URL
                                alt="Person Image"
                                sx={{ width: 300, height: 300, margin: 'auto', borderRadius: 0 }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Center - Text */}
                <Grid item xs={12} md={6}> {/* Set md to 6 for text */}
                    <Card elevation={0}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Einer, der den Bau kennt: Sowohl aus nächster Nähe, als auch aus der Perspektive des Planenden.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Seit seinem 17. Lebensjahr ist Roberto Swarovsky als Handwerker tätig. Nach einer erfolgreich abgeschlossenen Ausbildung zum Maurer sammelte er vielseitige praktische Erfahrungen auf dem Bau. 2017 erlangte er seinen Meistertitel. Bis zum Jahr 2019 war Roberto Swarovsky Angestellter Bauleiter.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Nun ist es sein Ziel, langjährige Erfahrung in die Ausführung und Leitung Ihres Bauvorhabens einzubringen. Fundament ist für ihn hier das kontinuierliche Zusammenspiel aus Planung, Koordination und Kontrolle, sowie die stetige Absprache mit Ihnen, dem Bauherren. Sein oberstes Credo jedoch: Qualität geht vor Quantität. Besonders auf dem Bau.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Side - Logo */}
                <Grid item xs={12} sm={12} md={3}> {/* Set md to 3 to keep logo aligned with the image */}
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        onClick={handleLogoClick}
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            justifyContent: { xs: "center", sm: "center" },
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        {logo}
                        <Box ml={2}>
                            <Typography variant="h5" noWrap>MAURER-Meister</Typography>
                            <Typography variant="h5">AMEL Prezime</Typography>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
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