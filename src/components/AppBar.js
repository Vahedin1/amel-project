import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// Material UI components
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

const pages = ['Home', 'About', 'Contact', 'Pricing', 'Products'];

const colors = {
  white: '#FFFFFF',
  orange: '#FF6A1A',
  brown: '#532912',
  gray: '#7A7979',
  orange2: '#AA4D1B',
  darkbrown: '#29180E',
};

const logoStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
};
// Menu button styles
const menuItemStyles = {
  backgroundColor: colors.orange,
  '&:hover': {
    backgroundColor: colors.gray,
  },
};
//  Pages text colors
const pagesItemStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  color: colors.white, 
};
const appbarItemStyles = {
  backgroundColor: colors.orange2,
  color: colors.white,
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
    navigate('/home'); 
  };

  return (
    <AppBar position="fixed" sx={{...appbarItemStyles}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between', alignItems: 'center'}}>
           {/*(PC) - Logo Stilizacija  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleLogoClick}
            sx={{...logoStyles,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}>
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
                <MenuItem key={page} onClick={() => handlePageClick(page)}
                sx = {{...menuItemStyles}}>
                  <Typography sx={{ textAlign: 'center', ...pagesItemStyles, }}>{page}</Typography>
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
              ...logoStyles,
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              cursor: 'pointer',
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
                  ...pagesItemStyles, 
                  my: 2, 
                  display: 'block',
                }}>
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