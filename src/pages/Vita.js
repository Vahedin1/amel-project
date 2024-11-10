import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box, Container, Link } from '@mui/material';
import '../CardAnimations.css';

const VitaContent = () => {

    const navigate = useNavigate();
    const colors = {
        white: "#FFFFFF",
        orange: "#FF6A1A",
        brown: "#532912",
        gray: "#7A7979",
        orange2: "#AA4D1B",
        darkbrown: "#29180E",
    };

    const handleKontaktClick = () => {
        navigate('/kontakt');
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
                                            borderRadius: '20px',
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
                                marginTop: { xs: '0px', md: '160px' },
                                color: '#333',
                                textAlign: 'center',
                                '&:hover': {
                                    transform: 'scale(1.05) !important',
                                },
                            }}
                        >
                            <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                <Typography className="tkt" variant="h5" component="h2" gutterBottom sx={{ color: colors.black, fontWeight: 'bold' }}>
                                    Ich bin Amel Unger, Gründer von Unger Bau.
                                </Typography>
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                Mit einer Ausbildung als Maurer und einem Meistertitel im Maurer- und Stahlbetonbau sowie langjähriger Erfahrung auf der Baustelle bringe ich das nötige Fachwissen und die handwerkliche Präzision mit, die Grundpfeiler jedes soliden Bauvorhabens sind.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Aktuell erweitere ich meine Fachkenntnisse durch ein Studium des Bauingenieurswesens, um die neusten Techniken und Standards in die Praxis unserer Projekte zu integrieren.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Schon in jungen Jahren entdeckte ich meine Leidenschaft für das Bauwesen, und diese Begeisterung ist der Kern meiner beruflichen Laufbahn.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Mit der Gründung von Unger Bau habe ich mir das Ziel gesetzt,
                                eine Alternative zu größeren Bauunternehmen zu schaffen. Mein Ansatz ermöglicht es, speziell kleinere Projekte mit voller Hingabe persönlich zu planen und auszuführen.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Ich freue mich auf unsere Zusammenarbeit, schreiben Sie mir gerne über unser<Link href="#" onClick={handleKontaktClick} sx={{ color: 'blue' }}> Kontaktformular</Link>.
                            </Typography>
                            <Typography variant="body1" gutterBottom>

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
            <div style={{ flex: '1 0 auto',marginTop:'-120px',marginBottom:'0' }}>
                <VitaContent />
            </div>
            <Footer />
        </div>
    );
}
