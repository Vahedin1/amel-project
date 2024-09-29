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


const Footer = () => {

    
        return (
            <Box
            sx={{
                width: '100%',
                backgroundColor: colors.darkbrown, 
                color: colors.white, 
                paddingTop: '40px',
                paddingBottom: '20px',
            }}
            >
            <Container maxWidth='x1' >
                {/* Top part with logo and menu links */}
                <Grid 
                container 
                spacing={4}
                justifyContent="center"  // horizontal 
                >
                {/* Logo  */}
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" align='center'  noWrap sx={{ fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    marginLeft: '10px',
                    

                    }}>
                    LOGO
                    </Typography>
                            {/* Social media icons and copyright */}
                    <Box align='center' sx={{ margin: '10px', }}>
                    <a href="https://instagram.com/profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', margin: '10px' }}>
                    <InstagramIcon  />
                    </a>
                    <a href="https://facebook.com/profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FacebookIcon />
                    </a>
                    <div>
                    <span id="email" sx={{ margin: '0px 0' }} style={{ display: 'block', margin: '13px 0 0 0' }}>atsomebody @example.com</span>
                    <br/>
                    <span id="phone" sx={{ margin: '0px 0' }} style={{ display: 'block', margin: '0px 0' }}>+381 63 8077687</span>
                    </div>

                    </Box>
                </Grid>

                {/* Menu Links */}
                <Grid item xs={9} sm={9}>
                    <Grid 
                    container 
                    spacing={4}
                    justifyContent="center"  // horizontal 
                    >
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Typography variant="body1" align='center'>Option</Typography>
                        <Link href="#" color="inherit" underline="hover" display="block" align="center" >
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Typography variant="body1"  align='center'>Option1</Typography>
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Typography variant="body1"  align='center'>Option2</Typography>
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Typography variant="body1"  align='center'>Option3</Typography>
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover" display="block" align="center">
                        -
                        </Link>
                        <br />

                    </Grid>
                    </Grid>
                </Grid>
                </Grid>

                {/* Horizontal Divider */}
                <Box
                sx={{
                    borderBottom: '1px solid #444',
                    marginY: '20px',
                }}
                />



                <Typography variant="body2" align="center" >
                &copy; Copyright. All rights reserved.
                </Typography>
            </Container>
            </Box>
        );
        };

export default Footer;