import ResponsiveAppBar from '../../components/AppBar';
import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import Footer from '../../components/Footer';

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

export default function Maler() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>



                {/* Layout Section */}
                <Container>
                    <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                        {/* Image Section */}
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image="/assets/img10.jpg"
                                    alt="Drywall construction"
                                />
                            </Card>
                        </Grid>

                        {/* Text Section */}
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Egal ob weiß oder doch lieber Farbe, wir erfüllen ihn jeden Wunsch und helfen gerne bei der Umsetzung ihrer Träume. Die alte Tapete sieht einfach nicht mehr gut aus sie wollen was Modernes auch kein Problem wir entfernen ihre Tapete Spachteln und Schleifen ihre Wände in Q3 Qualität für eine Optimale glatte Wand.
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
