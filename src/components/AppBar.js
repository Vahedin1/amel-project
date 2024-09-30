import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 

// Material UI components
import { AppBar, Box, Toolbar, Container, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';


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

const menuItemStyles = {
  backgroundColor: colors.orange,
  '&:hover': {
    backgroundColor: colors.gray,
  },
};

const pagesItemStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  color: colors.white, 
};

const appbarItemStyles = {
  backgroundColor: colors.orange2,
  color: colors.white,
};

const logo = (
<img src="/assets/logo-test.png" alt="Logo" style={{ height: '40px' }} />
);

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    event.preventDefault();
    setAnchorElNav(event.currentTarget);
    document.body.classList.add('no-scroll'); 
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    document.body.classList.remove('no-scroll'); 
  };

  const handlePageClick = (page) => { 
    const route = `/${page.toLowerCase()}`;
    navigate(route);
    handleCloseNavMenu();
  };
    
  const handleLogoClick = () => {
    navigate('/home'); 
  };


  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600 && anchorElNav) {
        handleCloseNavMenu(); // Close menu if resized to desktop view
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [anchorElNav]);


  return (
    <AppBar position="fixed" sx={{ ...appbarItemStyles }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* (PC) - Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleLogoClick}
            sx={{
              ...logoStyles,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {logo} 
          </Typography>


          {/* (MobileDropDown) - Button */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-start',
            }}
          >
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>


            {/* (MobileDropDown) - Menu for Pages on Button Click */}
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
                <MenuItem
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{ ...menuItemStyles }}
                >
                  <Typography sx={{ textAlign: 'center', ...pagesItemStyles }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* (Mobile) - Logo */}
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


          {/* (PC) - Display Pages */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  ...pagesItemStyles,
                  my: 2,
                  display: 'block',
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
