import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import GooglesMap from '../components/MapGoogle';

import { Typography } from '@mui/material';

export default function NoPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
                <Typography sx={{
                    textDecoration: "none",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: "0rem",
                    textAlign: "center",
                    marginTop: '70px',
                    marginBottom: '50px',
                    fontSize: {
                        sm: '2rem',
                        xs: '1rem',
                    }
                }}>
                    Error 404 - Nicht gefunden
                    <br />
                    Error 404: Not Found
                </Typography>
            </div>
            <Footer />

        </div>

    );
}