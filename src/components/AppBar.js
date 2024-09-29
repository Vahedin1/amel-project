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
        <Toolbar disableGutters sx={{justifyContent: 'space-between', alignItems: 'center'}}>
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
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'flex-start',
            }}>
            <IconButton 
              size="large"
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
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            }}>
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




        

        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default ResponsiveAppBar;