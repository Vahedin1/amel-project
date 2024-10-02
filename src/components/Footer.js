import React from 'react';
// Material UI Components
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Instagram as InstagramIcon, Facebook as FacebookIcon } from '@mui/icons-material';

const colors = {
    white: '#FFFFFF',
    orange: '#FF6A1A',
    brown: '#532912',
    gray: '#7A7979',
    orange2: '#AA4D1B',
    darkbrown: '#29180E',
};

const socialLinks = [
    { href: "https://instagram.com/profile", icon: <InstagramIcon />, label: "Instagram" },
    { href: "https://facebook.com/profile", icon: <FacebookIcon />, label: "Facebook" },
];

const pagesItemStyles = {
    backgroundColor: colors.gray,
    color: colors.white,
    paddingTop: '40px',
    paddingBottom: '20px',
    width: '1100px',
    margin: '0 auto',
    marginTop: '20px',  // Adds some margin on top
    marginBottom: '40px', //
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',  // Adds shadow effect
    borderRadius: '10px',  // Rounded corners
};

const logo = (
    <img src="/assets/logo-test.png" alt="Logo" style={{ height: '120px' }} />
);

const Footer = () => {
    const renderLinks = (option) => (
        <>
            {option.links.map((link, index) => (
                <Link 
                    key={index} 
                    href={link.href} 
                    color="inherit" 
                    underline="hover" 
                    display="block" 
                    align="center"
                    sx={{marginBottom: '10px'}}>
                    {link.text}
                </Link>
            ))}
        </>
    );

    const menuOptions = [
        {
            title: '',
            links: [
                { text: 'Datenschutzerklärung', href: '#' },
                { text: 'Cookie-Richtlinie(EU)', href: '#' },
                { text: 'Impressum', href: '#' },
                { text: 'Contact', href: '#' },
                { text: 'FGreja', href: '#' },
            ],
        },
    ];

    return (
        <Box sx={{ ...pagesItemStyles }}>
            <Container maxWidth='false' sx={{ maxWidth: '1100px', margin: '0', marginTop: 'auto',}}>
                <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                    {/* Logo */}
                    <Grid item xs={12} sm={3}>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start' }, alignItems: 'center' }}>
                            {logo}
                        </Box>
                    </Grid>

                    {/* Contact Information and Social Media Icons */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: {xs: 'center', sm: 'center'} }}>
                            <Typography sx={{ display: 'block', marginBottom: '5px' }}>
                                Alte Dorfstraße 28, 14542 Werder/Havel
                            </Typography>
                            <Typography sx={{ display: 'block', marginBottom: '5px' }}>
                                0162 420 66 78
                            </Typography>
                            <Typography sx={{ display: 'block', marginBottom: '10px' }}>
                                office@swarovsky-bau.de
                            </Typography>

                            {/* Social Media Icons */}
                            <Box>
                                {socialLinks.map(({ href, icon, label }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', margin: '0 10px' }} aria-label={label}>
                                        {icon}
                                    </a>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Menu Links */}
                    <Grid item xs={12} sm={3} container justifyContent={{xs: 'center', sm: 'flex-end'}} alignItems="center">
                        <Box sx={{ textAlign: {xs : 'center', sm: 'right'} }}>
                            {menuOptions.map((option, index) => (
                                <Box key={index}>
                                    {renderLinks(option)}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Horizontal Divider */}
                <Box sx={{ borderBottom: '2px solid #444', marginY: '20px' }} />

                {/* Copyright */}
                <Typography variant="body2" align="center">
                    &copy; Copyright by Amel – Amel-bau.de
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
