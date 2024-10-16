import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import '../CardAnimations.css';

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
};

export default function CombinedPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                <SectionUmAnbauten />
                <SectionTrackenBau />
                <SectionPutzabeiten />
                <SectionMaurerarbeiten />
                <SectionMaler />
            </div>
            <Footer />
        </div>
    );
}

function SectionUmAnbauten() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Custom shadow
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="320"
                            image="/assets/L-UmA.webp"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h6" gutterBottom sx={{ color: colors.orange2 }}>
                                UmAbauten
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Bei einem Umbau von bestehenden Gebäuden werden überwiegend Sanierungen im Innenbereich vorgenommen. Dabei kann entweder der vorhandene Grundriss
                                umgestaltet
                                oder das Dachgeschoss beziehungsweise allgemein der Innenbereich ausgebaut werden.
                                Anbauten umfassen hauptsächlich die Erweiterung der vorhandenen Gebäudehülle von außen, meist in Zusammenhang mit Umbauarbeiten im Innenbereich.
                                Anbauarbeiten können beispielsweise in
                                Form eines ein- oder mehrgeschossigen Anbaus an das Bestandsobjekt oder auch in Form einer Gebäudeaufstockung um ein- oder mehrere Geschosse ausgeführt
                                werden. Die Ausführung kann als umfangreich angesehen werden, da die überwiegenden Gewerke vergleichbar wie im Neubau anzutreffen sein können.
                                Als Meisterbetrieb und Bauunternehmen aus Potsdam führen wir gerne alle Arten von Um- und Anbauten für Sie aus! Kontaktieren Sie uns heute!
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionTrackenBau() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="340"
                            image="/assets/L-Tracken.webp"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                TrackenBau
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Büroräume und Innenausbau oder einfach nur renovierungsbedingte Trockenbauarbeiten? Unsere Leistungsbereiche umschließen den kompletten Trockenbau Bereich vom Einfamilienhaus
                                oder Mehrfamilienhäuser bis hin zu Büro- und Verwaltungsgebäuden. Ob es nun um die Deckengestaltung,
                                Leichtbau-Wände, Ständerwerke, Brandschutz oder den Dachgeschossausbau geht. Wir erledigen Trockenbauarbeiten aller Art. Sprechen Sie uns mit Ihrer individuellen Planung an.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionPutzabeiten() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/L-Putza.webp"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            height: '300px',
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                Putzarbeiten 
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Putzarbeiten sind nicht jedermanns Sache. Ihr alter Putz sieht einfach nicht mehr gut aus oder löst sich von der Wand
                                – kein Problem! Wir entfernen und erneuern gerne alles für Sie, egal ob Innen- oder Außenputz.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionMaurerarbeiten() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/L-Maurer.webp"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                Maurerarbeiten
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Ebenfalls zu unserem Spektrum gehören natürlich die Maurer- und Betonarbeiten. Das Kerngeschäft unseres Unternehmens beinhaltet die Ausführung
                                sämtlicher Maurerarbeiten. Hierzu zählen der Neubau von kleineren Anbauten, Umbauarbeiten oder auch die Kompletterrichtung von Einfamilienhäusern
                                oder Wohn- und Geschäftshäusern. Unser Fachbetrieb ist also nicht nur im Neubau, sondern auch
                                in der Sanierung, Modernisierung und Instandsetzung der verschiedensten Bauwerke tätig. Individuell wie Sie bringen wir Ihr Bauvorhaben in die
                                richtige Spur! Sprechen Sie uns an!
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

function SectionMaler() {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center" marginTop={'50px'}>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: { xs: '10px', md: '50px' },
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="/assets/L-Maler.webp"
                            alt="Drywall construction"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="slide-card"
                        sx={{
                            marginBottom: '50px',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            boxShadow: '0px 14px 14px rgba(255, 165, 0, 0.25)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '14px 14px 14px rgba(255, 165, 0, 0.25)',
                                transform: 'scale(1.05) !important',
                            },
                        }}>
                        <CardContent sx={{ borderRadius: '8px', padding: '16px', margin: '8px' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: colors.orange2 }}>
                                Malerarbeiten
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Egal ob weiß oder doch lieber Farbe, wir erfüllen ihn jeden Wunsch und helfen gerne bei der Umsetzung ihrer Träume.
                                Die alte Tapete sieht einfach nicht mehr gut aus sie wollen was Modernes auch kein Problem wir entfernen ihre Tapete Spachteln und Schleifen ihre Wände
                                in Q3 Qualität für eine Optimale glatte Wand.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
