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
                        Datenschutzerklärung
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            1. Verantwortlicher für die Datenverarbeitung
                        </Typography>
                        <Typography variant="body2">
                            Amel Unger<br />
                            Maurermeister<br />
                            Römerstraße 9<br />
                            73265 Dettingen<br />
                            E-Mail: kontakt@unger-bau.info<br />
                            Telefon: +4917662433192
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            2. Allgemeine Hinweise zur Datenverarbeitung
                        </Typography>
                        <Typography variant="body2">
                            Wir verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen Vorschriften der DSGVO.
                            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            3. Webhosting und Server-Logfiles
                        </Typography>
                        <Typography variant="body2">
                            Unsere Webseite wird bei einem externen Dienstleister gehostet. Der Hosting-Provider verarbeitet in unserem Auftrag
                            personenbezogene Daten, die beim Besuch unserer Webseite automatisch erhoben werden, darunter:
                            <ul>
                                <li>IP-Adresse</li>
                                <li>Datum und Uhrzeit des Zugriffs</li>
                                <li>Referrer-URL (zuvor besuchte Seite)</li>
                                <li>Browsertyp und -version</li>
                                <li>Betriebssystem</li>
                            </ul>
                        </Typography>
                        <br />
                        <Typography variant="h7">
                            <b>Rechtsgrundlage:</b>

                        </Typography>
                        <Typography variant="body2">
                            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Webseite).
                        </Typography>
                        <br />
                        <Typography variant="body2"><b>Hosting-Anbieter:</b></Typography>
                        <Typography variant="body2">Hostinger <br />
                            <a
                                href="https://www.hostinger.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#1976d2', textDecoration: 'underline' }}
                            >
                                www.hostinger.de

                            </a><br />
                            Weitere Informationen finden Sie in der Datenschutzerklärung des Anbieters.
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            4. Kontaktformular
                        </Typography>
                        <Typography variant="body2">
                            Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, speichern wir Ihre Angaben (Name, E-Mail, Telefonnummer, Nachricht)
                            zur Bearbeitung Ihrer Anfrage.
                        </Typography>
                        <br />
                        <Typography variant="h7">                            <b>Rechtsgrundlage:</b>
                        </Typography>
                        <Typography variant="body2">Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen).</Typography>
                        <br />
                        <Typography variant="h7">
                            <b>Speicherdauer:</b>
                        </Typography>
                        <Typography variant="body2">Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen bestehen.</Typography>
                    </Box>


                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            5. Verlinkung zu Social-Media-Plattformen
                        </Typography>
                        <Typography variant="body2">
                            Auf unserer Webseite finden Sie Links zu unseren Profilen auf den folgenden Social-Media-Plattformen
                        </Typography>
                        <Typography variant="body2">
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </Typography>
                        <Typography variant="body2">
                            Wenn Sie diese Links anklicken, gelten die Datenschutzbestimmungen der jeweiligen
                        </Typography>
                        <Typography variant="body2">
                            Plattformen. Weitere Informationen finden Sie hier:
                        </Typography>
                        <Typography variant="body2">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.facebook.com/policy.php"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#1976d2', textDecoration: 'underline' }}
                                    >
                                        Facebook-Datenschutzrichtlinie
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://help.instagram.com/519522125107875"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#1976d2', textDecoration: 'underline' }}
                                    >
                                        Instagram-Datenschutzrichtlinie
                                    </a>
                                </li>
                            </ul>

                        </Typography>

                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            6. SSL-/TLS-Verschlüsselung
                        </Typography>
                        <Typography variant="body2">
                            Unsere Webseite nutzt eine SSL-/TLS-Verschlüsselung, um Ihre Daten bei der Übertragung zu schützen.
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            7. Cookies
                        </Typography>
                        <Typography variant="body2">
                            Auf dieser Webseite sind keine Cookies eingesetzt
                            <br />
                            Info über Cookies: <br />

                            Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Diese richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Die meisten verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis diese gelöscht werden. Diese Cookies ermöglichen es, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität einer Website eingeschränkt sein.

                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            8. Verwendung von Google Maps
                        </Typography>
                        <Typography variant="body2">
                            Diese Webseite benutzt Google Maps API, einen Kartendienst der Google LLC. („Google“), zur Darstellung einer interaktiven Karte und zur Erstellung von Anfahrtsplänen. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA betrieben. Durch die Nutzung von Google Maps können Informationen über Ihre Benutzung dieser Webseite (einschließlich Ihrer IP-Adresse) an einen Server von Google in den USA übertragen und dort gespeichert werden. Google wird die durch Maps gewonnenen Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder so weit Dritte diese Daten im Auftrag von Google verarbeiten.
                            Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Trotzdem wäre es technisch möglich, dass Google aufgrund der erhaltenen Daten eine Identifizierung zumindest einzelner Nutzenden vornehmen könnte. Es wäre möglich, dass personenbezogene Daten und Persönlichkeitsprofile von Nutzern der Webseite von Google für andere Zwecke verarbeitet werden könnten, auf welche wir keinen Einfluss haben und haben können. Sie haben die Möglichkeit, den Service von Google Maps zu deaktivieren und somit den Datentransfer an Google zu verhindern, indem Sie JavaScript in Ihrem Browser deaktivieren. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall die Kartenanzeige auf unseren Seiten nicht nutzen können. Die Google-Datenschutzerklärung & zusätzlichen Nutzungsbedingungen für Google Maps finden Sie unter
                            <a
                                href="https://www.google.de/intl/de/policies/privacy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#1976d2', textDecoration: 'underline' }}
                            >
                                https://www.google.de/intl/de/policies/privacy/

                            </a>
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 4, marginBottom: '100px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            9. Widerspruch Werbe-Mails
                        </Typography>
                        <Typography variant="body2">
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4, marginBottom: '100px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            10. Urheberrecht und Bildnachweise
                        </Typography>
                        <Typography variant="body2">
                            Das Firmenlogo ist geistiges Eigentum von Amel Unger und urheberrechtlich geschützt. Jede unberechtigte Nutzung, Vervielfältigung oder Verbreitung ohne vorherige schriftliche Zustimmung ist untersagt.
                            <br />
                            Die auf dieser Webseite verwendeten Bilder stammen von der Bilddatenbank iStock und wurden ordnungsgemäß lizenziert. Die Bilder unterliegen dem Urheberrecht der jeweiligen Fotografen. Eine Weiterverwendung ohne entsprechende Lizenz ist nicht gestattet.
                            <br />
                            Lizenzierte Bilder von: <br />
                            <a
                                href="https://ec.europa.eu/consumers/odr"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#1976d2', textDecoration: 'underline' }}
                            >
                                iStock.com.
                            </a>

                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4, marginBottom: '100px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            11. Betroffenenrechte
                        </Typography>
                        <Typography variant="body2">
                            Sie haben das Recht auf: <br />
                            <ul>
                                <li><b>Auskunft</b> über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                                <li><b>Berichtigung</b> unrichtiger Daten (Art. 16 DSGVO)</li>
                                <li><b>Löschung</b> Ihrer Daten (Art. 17 DSGVO)</li>
                                <li><b>Einschränkung der Verarbeitung </b> (Art. 18 DSGVO)</li>
                                <li><b>Datenübertragbarkeit</b> (Art. 20 DSGVO)</li>
                                <li><b>Widerspruch</b> gegen die Verarbeitung (Art. 21 DSGVO)</li>
                            </ul>
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4, marginBottom: '100px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            12. Beschwerderecht bei der Aufsichtsbehörde
                        </Typography>
                        <Typography variant="body2">
                            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4, marginBottom: '100px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            13. Streitschlichtung
                        </Typography>
                        <Typography variant="body2">
                            Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            <br />
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a
                                href="https://ec.europa.eu/consumers/odr"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#1976d2', textDecoration: 'underline' }}
                            >
                                https://ec.europa.eu/consumers/odr.
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Container>

            <Footer style={{ flexShrink: 0 }} />
        </div >
    );
}
