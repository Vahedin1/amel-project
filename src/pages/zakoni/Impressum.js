import React from "react";
import { Container, Typography, Box, Grid, Divider, Link } from "@mui/material";
import { useNavigate, Link as RouterLink} from 'react-router-dom';
import ResponsiveAppBar from "../../components/AppBar";
import Footer from "../../components/Footer";

export default function Impressum() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <ResponsiveAppBar />

      <Container
        component="main"
        maxWidth="md"
        style={{ flex: "1 0 auto", marginTop: "100px" }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Impressum
          </Typography>
        </Box>

        {/* Angaben gemäß § 5 TMG */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              <strong>Angaben gemäß § 5 TMG (Telemediengesetz)</strong>
            </Typography>
            <Typography variant="body2">
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "underline" }}
              >
                www.unger-bau.info
              </a>{" "}
              <br />
              Amel Unger
              <br />
              Maurer und Stahlbetonbaumeister
              <br />
              Römerstraße 9<br />
              73265 Dettingen unter Teck
              <br />
              Deutschland
            </Typography>
          </Grid>
        </Grid>

        {/* Kontakt */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Kontakt:</strong>
          </Typography>
          <Typography variant="body2">
            Telefon: +4917662433192
            <br />
            E-Mail: kontakt@unger-bau.info
          </Typography>
        </Box>

        {/* Geschäftsführer */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Vertretungsberechtigter Geschäftsführer:</strong>
          </Typography>
          <Typography variant="body2">
            Amel Unger
            <br />
            UStIDNr: DE370403014
          </Typography>
        </Box>

        {/* Berufsbezeichnung und Regelungen */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Berufsbezeichnung und berufsrechtliche Regelungen:</strong>
          </Typography>
          <Typography variant="body2">
            <ul>
              <li>
                Berufsbezeichnung: Maurer und Stahlbetonbaumeister (verliehen in
                Deutschland)
                <br />
              </li>
              <li>
                Eingetragen in die Handwerksrolle der Handwerkskammer Stuttgart
              </li>
            </ul>
          </Typography>
        </Box>

        {/* Verantwortlich für den Inhalt */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" gutterBottom>
            <strong>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </strong>
          </Typography>
          <Typography variant="body2">
            Amel Unger
            <br />
            Römerstraße 9<br />
            73265 Dettingen unter Teck
            <br />
            Deutschland
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Haftungsausschluss */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Haftungsausschluss (Disclaimer)
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Haftung für Inhalte:</strong> <br />
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Typography>
          <br />
          <Typography variant="body2" gutterBottom>
            <strong>Haftung für Links:</strong> <br />
            Unsere Webseite enthält Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Urheberrecht */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Urheberrecht
          </Typography>
          <Typography variant="body2">
            Das auf dieser Webseite verwendete Firmenlogo und der Slogan wurden
            von Amel Unger selbst entworfen und unterliegen dem Urheberrecht.
            Alle anderen Inhalte und Werke auf dieser Webseite, wie Texte, Fotos
            und Grafiken, sind <strong>urheberrechtlich</strong> geschützt.
            Jegliche Vervielfältigung, Bearbeitung, Verbreitung und Verwertung
            außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. bzw. Erstellers.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            <strong>Bildnachweise:</strong>
          </Typography>
          <Typography variant="body2">
            Die auf dieser Webseite verwendeten Bilder stammen von der
            Bilddatenbank iStock und wurden ordnungsgemäß lizenziert. Weitere
            Informationen zu den Lizenzbedingungen finden Sie auf{" "}
            <Link href="https://www.istock.com" target="_blank" rel="noopener">
              iStock.com
            </Link>
            .
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Streitschlichtung */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Streitschlichtung
          </Typography>
          <Typography variant="body2">
            Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen. <br />
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link
            finden: <br />
            <Link
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener"
            >
              {" "}
              https://ec.europa.eu/consumers/odr
            </Link>
            .
          </Typography>
        </Box>

        {/* Streitschlichtung */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Datenschutz
          </Typography>
          <Typography variant="body2">
            Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
            <RouterLink
              to="/datenschutzerklarung"
            >
              Datenschutzerklärung
            </RouterLink>
            .
          </Typography>
        </Box>
      </Container>

      <Footer style={{ flexShrink: 0 }} />
    </div>
  );
}
