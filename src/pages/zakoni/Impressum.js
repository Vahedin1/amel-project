import React from 'react';
import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';

export default function Impressum() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />

            <Container component="main" maxWidth="md" style={{ flex: '1 0 auto', marginTop: '100px' }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Impressum
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Angaben gemäß Paragraph 5 TMG:</strong></Typography>
                            <Typography variant="body2">
                                Unger-bau.de<br />
                                Amel Unger<br />
                                Alte Försterei 28<br />
                                14542 Werder/Havel<br />
                                Deutschland
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Vertretungsberechtigter Geschäftsführer:</strong></Typography>
                            <Typography variant="body2">
                                Amel Unger<br />
                                UStIDNr: DE24533534256665<br />
                                Steuer-Nr.: 046/24430/033532
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Genehmigungsbehörde nach § 34 c Gewerbeordnung erteilt durch Gewerbeamt: Potsdam
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Streitschlichtung
                    </Typography>
                    <Typography variant="body2">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Haftung für Inhalte
                    </Typography>
                    <Typography variant="body2">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen...
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Haftung für Links
                    </Typography>
                    <Typography variant="body2">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                        fremden Inhalte auch keine Gewähr übernehmen...
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4, marginBottom: '100px' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Urheberrecht
                    </Typography>
                    <Typography variant="body2">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht...
                    </Typography>
                </Box>
            </Container>

            <Footer style={{ flexShrink: 0 }} />
        </div>
    );
}
