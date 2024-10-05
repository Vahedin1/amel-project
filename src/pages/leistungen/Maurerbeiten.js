import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
};



export default function Maurerbeiten() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>


                {/* Layout Section */}
                <Container>
                    <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                        {/* Image Section */}
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    marginBottom: {xs: '10px', md: '50px'},
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                                    transition: '0.3s',              // Smooth transition
                                    '&:hover': {
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',  // Larger shadow on hover
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                <CardMedia
                                    component="img"
                                    height="450"
                                    image="/assets/img11.jpg"
                                    alt="Drywall construction"
                                />
                            </Card>
                        </Grid>

                        {/* Text Section */}
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    marginBottom: '50px',
                                    backgroundColor: '#f5f5f5',  // Light gray background
                                    color: '#333',               // Text color
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                                    transition: '0.3s',              // Smooth transition
                                    '&:hover': {
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.35)',  // Larger shadow on hover
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                <CardContent
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '16px',
                                        margin: '8px',
                                    }}>
                                    <Typography variant="h6" gutterBottom sx={{ color: colors.orange2 }}>
                                        Büroräume und Innenausbau oder einfach nur renovierungsbedingte Trockenbauarbeiten?
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        Ebenfalls zu unserem Spektrum gehören natürlich die Maurer- und Betonarbeiten. Das Kerngeschäft unseres Unternehmens beinhaltet die Ausführung sämtlicher Maurerarbeiten. Hierzu zählen der Neubau von kleineren Anbauten, Umbauarbeiten oder auch die Kompletterrichtung von Einfamilienhäusern oder Wohn- und Geschäftshäusern. Unser Fachbetrieb ist also nicht nur im Neubau, sondern auch in der Sanierung, Modernisierung und Instandsetzung der verschiedensten Bauwerke tätig. Individuell wie Sie bringen wir Ihr Bauvorhaben in die richtige Spur! Sprechen Sie uns an!
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        Ob es nun um die Deckengestaltung, Leichtbau-Wände, Ständerwerke, Brandschutz oder den Dachgeschossausbau geht. Wir erledigen Trockenbauarbeiten aller Art. Sprechen Sie uns mit Ihrer individuellen Planung an.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Footer />
        </div>

    );
}