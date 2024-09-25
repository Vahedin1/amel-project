import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Contact', 'Pricing', 'Products'];

const colors = {
  white: '#FFFFFF',
  orange: '#FF6A1A',
  brown: '#532912',
  gray: '#7A7979',
  orange2: '#AA4D1B',
  darkbrown: '#29180E',
};


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => { 
    const route = `/${page.toLowerCase()}`;
    navigate(route);
    handleCloseNavMenu();
  };
    
  const handleLogoClick = () => {
    navigate('/home'); // Navigate to the home page (adjust the route if needed)
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: colors.darkbrown,
      color: colors.white,
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           {/*(PC) - Logo Stilizacija  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleLogoClick}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer', // Show pointer on hover
            }}
          >

            LOGO
          </Typography>



            {/*(MobileDropDown) - Dugme*/}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' }, }}>
            <IconButton 
              size="large"
              aria-label="account of current user"
              ria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>



            {/*(MobileDropDown) - Menu for Pages on Button Click */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>



           {/*(Mobile) - Logo Stilizacija  */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>



            {/*(PC) - Display Pages */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{ 
                  my: 2, 
                  color: colors.white, 
                  display: 'block',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                   }}
              >
                {page}
              </Button>
            ))}
          </Box>



           {/*(PC) - Icons*/}
          <Box sx={{ 
              flexGrow: 0,     
              display: 'flex',
              alignItems: 'center', 
              gap: 1,  
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 'large',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',

           }}>
          <a href="https://instagram.com/profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <InstagramIcon  />
            </a>
            <a href="https://facebook.com/profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FacebookIcon />
            </a>
            <a href="mailto:someone@example.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              <EmailIcon  />
            </a>
              <PhoneIcon />+381 63 8077687
          </Box>
        

        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default ResponsiveAppBar;