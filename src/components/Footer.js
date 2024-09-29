import React from 'react';
import { Box, Container, Typography, Grid, Link,  } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
    backgroundColor: colors.orange2, 
    color: colors.white, 
    paddingTop: '40px',
    paddingBottom: '20px',
    width: '100%',
}

const logoStyles = {
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
};


const Footer = () => {
    const renderLinks = (option) => (
        <>
            <Typography variant="body1" align="center">{option.title}</Typography>
                {option.links.map((link, index) => (
                    <Link key={index} href={link.href} color="inherit" underline="hover" display="block" align="center">
                        {link.text}
                    </Link>
            ))}
        </>
    );
    
    const menuOptions = [
        {
        title: 'Option',
        links: [
            { text: '-', href: '#' },
            { text: '-', href: '#' },
            { text: '-', href: '#' },
            { text: '-', href: '#' },
        ],
        },
        {
        title: 'Option1',
        links: [
            { text: '-', href: '#' },
            { text: '-', href: '#' },
            { text: '-', href: '#' },
            { text: '-', href: '#' },
        ],
        },
        {
        title: 'Option2',
        links: [
            { text: '-', href: '#' },
            { text: '-', href: '#' },
            { text: '-', href: '#' },
        ],
        },
        {
        title: 'Option3',
        links: [
            { text: '-', href: '#' },
            { text: '-', href: '#' },
        ],
        },
    ];
    
        return (
            <Box sx={{...pagesItemStyles,}}>
                <Container maxWidth='x1' >
                    <Grid container spacing={4} justifyContent="center">
                    {/* Logo  */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align='center'  noWrap 
                        sx={{marginLeft: '10px', ...logoStyles}}>
                            LOGO
                        </Typography>


        {/* Social media icons and copyright */}
        <Box align='center' sx={{ margin: '10px', }}>
            {socialLinks.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', margin: '10px' }} aria-label={label}>
                    {icon}
                </a>
            ))}
                <div>
                    <span id="email" style={{ display: 'block', margin: '13px 0 0 0' }}>atsomebody @example.com</span>
                        <br/>
                    <span id="phone" style={{ display: 'block', margin: '0' }}>+381 63 8077687</span>
                </div>
            </Box>
        </Grid>


                {/* Menu Links */}
                <Grid item xs={9} sm={9}>
                    <Grid container spacing={4} justifyContent="center">
                        {menuOptions.map((option, index) => (
                            <Grid item xs={12} sm={6} lg={3} md={3} key={index}>
                                {renderLinks(option)}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>


            {/* Horizontal Divider */}
            <Box
                sx={{borderBottom: '1px solid #444',marginY: '20px',}}/>
                    <Typography variant="body2" align="center" >
                        &copy; Copyright. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        );
        };

export default Footer;