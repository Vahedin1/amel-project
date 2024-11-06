import React from "react";
import { useNavigate } from "react-router-dom";

// Material UI Components
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import {
    Instagram as InstagramIcon,
    Facebook as FacebookIcon,
    LocationOn as LocationOnIcon,
    Email as EmailIcon,
    LocalPhone as LocalPhoneIcon,
} from "@mui/icons-material";

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#e6e1e1",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
    black: "#000000",

};

const logoStyles = {
    fontFamily: 'Bahnschrift, Arial, sans-serif',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
};


const socialLinks = [
    {
        href: "https://instagram.com/profile",
        icon: <InstagramIcon />,
        label: "Instagram",
    },
    {
        href: "https://facebook.com/profile",
        icon: <FacebookIcon />,
        label: "Facebook",
    },
];


const footerItemStyles = {
    color: colors.white,
    textDecoration: "none",
    fontFamily: 'Bahnschrift, Arial, sans-serif',
    fontWeight: 700,
    letterSpacing: "0rem",
    textAlign: "center",

};

const pagesItemStyles = {
    backgroundColor: colors.black,
    color: colors.white,
    paddingTop: "40px",
    paddingBottom: "20px",
    width: "100%",
    margin: "0 auto",
    padding: "0 auto",
    boxShadow: "0px -6px 15px rgba(0, 0, 0, 0.3)", // Shadow effect similar to AppBar
    transition: 'background-color 0.3s', // Smooth transition
    '&:hover': {
        //   backgroundColor: colors.black, // Change this to your desired hover color
    },
};

const logo = (
    <img src="/assets/logo-test.webp" alt="Logo" style={{ height: "120px" }} />
);

const Footer = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavigation = (path) => {
        navigate(path); // Use navigate to go to the specified path
    };

    const handleLogoClick = () => {
        navigate("/");
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
                    sx={{ marginBottom: "10px", cursor: "pointer" }}
                    onClick={() =>
                        link.href.startsWith("/")
                            ? handleNavigation(link.href)
                            : window.open(link.href, "_blank")
                    }
                >
                    {link.text}
                </Link>
            ))}
        </>
    );

    const menuOptions = [
        {
            title: "",
            links: [
                { text: "Datenschutzerklärung", href: "/datenschutzerklarung" },
                { text: "Impressum", href: "/impressum" },
                { text: "Kontakt", href: "/kontakt" },
            ],
        },
    ];

    return (
        <Box sx={{ ...pagesItemStyles, }}>
            <Container
                maxWidth="false"
                sx={{
                    maxWidth: { xs: "100%", sm: "1300px" },
                    margin: "0 auto",
                    marginTop: "0 auto",
                }}
            >
                <Grid
                    container
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* Logo */}
                    <Grid item xs={12} sm={12} md={3}>
                        <Box
                            onClick={handleLogoClick}
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "column" },
                                justifyContent: { xs: "center", sm: "center" },
                                alignItems: "center",
                                cursor: "pointer",
                                '&:hover': {
                                    transform: 'scale(1.05)',      // Slight scaling effect on hover
                                },
                            }}
                        >

                            {/* {logo} */}
                            <Box
                                component="img"
                                src="assets/logo bez slogan2.png"
                                alt="Logo"
                                onClick={handleLogoClick}
                                sx={{
                                    ...logoStyles,
                                    height: '150px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': { transform: 'scale(1.05)' },
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Contact Information and Social Media Icons */}
                    <Grid item xs={12} sm={12} md={3}>
                        <Box
                            sx={{
                                textAlign: "center", // Center-aligns the text within each Box
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "15px", // Controls the vertical spacing between items
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "5px", // Controls the spacing between the icon and text
                                }}
                            >
                                <LocationOnIcon sx={{marginBottom: '0px'}}>

                                </LocationOnIcon>
                                <Typography noWrap sx={{ ...footerItemStyles }}>
                                    Alte Dorfstraße 28, 14542 Werder/Havel
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "5px",
                                }}
                            >
                                <LocalPhoneIcon />
                                <Typography sx={{ ...footerItemStyles }}>
                                    0162 420 66 78
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "5px",
                                }}
                            >
                                <EmailIcon />
                                <Typography sx={{ ...footerItemStyles }}>
                                    info@unger.de
                                </Typography>
                            </Box>

                            {/* Social Media Icons */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "10px", // Controls spacing between social media icons
                                }}
                            >
                                {socialLinks.map(({ href, icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                        aria-label={label}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </Box>
                        </Box>
                    </Grid>


                    {/* Menu Links */}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={3}
                        container
                        justifyContent={{ xs: "center", sm: "center" }}
                        alignItems="center"
                    >
                        <Box
                            sx={{
                                textAlign: { xs: "center", sm: "center" },
                                ...footerItemStyles,

                            }}
                        >
                            {menuOptions.map((option, index) => (
                                <Typography key={index} sx={{
                                    ...footerItemStyles,
                                    display: 'inline-block', // Makes each menu option its own block
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for 
                                    '&:hover': {
                                        transform: 'scale(1.05)',      // Slight scaling effect on hover
                                    },
                                }}>
                                    {renderLinks(option)}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Horizontal Divider */}
                <Box sx={{ borderBottom: "2px solid #444", marginY: "20px" }} />

                {/* Copyright */}
                <Typography variant="body2" align="center">
                    &copy; Copyright by Unger – Unger-bau.de
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;