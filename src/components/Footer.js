import React from 'react';
import { useNavigate } from 'react-router-dom';

// Material UI Components
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Instagram as InstagramIcon, Facebook as FacebookIcon, LocationOn as LocationOnIcon, Email as EmailIcon, LocalPhone as LocalPhoneIcon } from '@mui/icons-material';

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
    width: '100%',
    maxWidth: '1100px',
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

    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavigation = (path) => {
        navigate(path); // Use navigate to go to the specified path
    };

    const handleLogoClick = () => {
        navigate('/home'); 
    };

    const renderLinks = (option) => (
        <>
            {option.links.map((link, index) => (
                <Link 
                    key={index} 
                    color="inherit" 
                    underline="hover" 
                    display="block" 
                    align="center"
                    sx={{marginBottom: '10px', cursor: 'pointer'}}
                    onClick={() => link.href.startsWith('/') ? handleNavigation(link.href) : window.open(link.href, "_blank")}
                    >

                    {link.text}
                </Link>
            ))}
        </>
    );


    const menuOptions = [
        {
            title: '',
            links: [
                { text: 'Datenschutzerklärung', href: '/datenschutzerklarung' },
                { text: 'Cookie-Richtlinie(EU)', href: '/cookie-richtlinie-eu' },
                { text: 'Impressum', href: '/impressum'  },
                { text: 'Kontakt', href: '/kontakt'},
            ],
        },
    ];


    return (
        <Box sx={{ ...pagesItemStyles }}>
            <Container maxWidth='false' sx={{ maxWidth: {xs: '100%', sm: '1100px'}, margin: '0', marginTop: 'auto',}}>
                <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                    {/* Logo */}
                    <Grid item xs={12} sm={12} md={3}>
                        <Box onClick={handleLogoClick} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center' }, alignItems: 'center', cursor: 'pointer', }}>
                            {logo}
                        </Box>
                    </Grid>


                    {/* Contact Information and Social Media Icons */}
                    <Grid item xs={12} sm={12} md={3}>
                        <Box sx={{ textAlign: {xs: 'center', sm: 'center'} }}>
                            <Box sx={{ display: 'flex', flexDirection: {xs: 'row', sm: 'row'}, alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                                <LocationOnIcon sx={{ marginRight: '5px', marginBottom: {xs: '5px', sm: '5px', md:'30px'}, marginTop: {xs: '0px', sm: '0px'},  }} />
                                <Typography>
                                    Alte Dorfstraße 28, 14542 Werder/Havel
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: {xs: 'row', sm: 'row'}, alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                                <LocalPhoneIcon sx={{ marginRight: '5px', marginBottom: '2px'}} />
                                <Typography>
                                    0162 420 66 78
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: {xs: 'row', sm: 'row'}, alignItems: 'center', justifyContent: 'center', marginBottom: '15px', }}>
                                <EmailIcon 
                                sx={{ marginRight: '5px'}} />
                                <Typography  >
                                    office@amel-bau.de
                                </Typography>
                            </Box>
                        


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
                    <Grid item xs={12} sm={12} md={3} container justifyContent={{xs: 'center', sm: 'center'}} alignItems="center">
                        <Box sx={{ textAlign: {xs : 'center', sm: 'center'} }}>
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
