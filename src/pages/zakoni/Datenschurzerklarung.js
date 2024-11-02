import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';

export default function Datenschutzerklarung() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />

            <Container component="main" maxWidth="md" style={{ flex: '1 0 auto', marginTop: '100px' }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Datenschutz
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Allgemeine Hinweise
                        </Typography>
                        <Typography variant="body2">
                            Die Nutzung unserer Webseite ist in der Regel ohne Angabe von personenbezogenen Daten möglich.
                            Alle anfallenden personenbezogenen Informationen werden nur unter Beachtung der Datenschutz-Grundverordnung (DSGVO),
                            des Bundesdatenschutzgesetzes (BDSG) und des Telemediengesetzes (TMG) von uns erfasst und verarbeitet...
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Verantwortlicher
                    </Typography>
                    <Typography variant="body2">
                        Amel Unger M.Eng.<br />
                        Schönbergstr 451A<br />
                        7024599 Stuttgart<br />
                        07311 132 6366 3495<br />
                        info@amel-bau.de
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Datenerhebung, -nutzung und Weitergabe
                    </Typography>
                    <Typography variant="body2">
                        Unser Unternehmen ist auf der Wix.com-Plattform gehostet. Wix.com stellt uns die Online-Plattform zur Verfügung,
                        über die wir unsere Dienste an Sie anbieten können. Ihre Daten können über den Datenspeicher, die Datenbanken und
                        die allgemeinen Wix.com-Anwendungen von Wix.com gespeichert werden...
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 4, marginBottom: '100px'}}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Cookies und Widerspruchsrecht bei Direktwerbung
                    </Typography>
                    <Typography variant="body2">
                        Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden...
                        Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten, die
                        entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren.
                    </Typography>
                </Box>
            </Container>

            <Footer style={{ flexShrink: 0 }} />
        </div>
    );
}
