import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Material UI components
import { AppBar, Box, Toolbar, Container, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const pages = ['Home', 'Leistungen', 'Kontakt', 'Vita'];


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
  backgroundColor: colors.white,
  '&:hover': {
    backgroundColor: '           #f7e4c6        ',
    color: colors.white,
  },
};


const pagesItemStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  color: {
    xs: colors.gray,
    md: colors.white,
  },
};

const appbarItemStyles = {
  backgroundColor: colors.darkbrown,
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
    if (page === 'Leistungen') {
      navigate('/leistungen'); // Directly navigate to /leistungen
    } else {
      const route = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
      navigate(route);
    }
    handleCloseNavMenu();
  };

  const handleLogoClick = () => {
    navigate('/');
  };



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600 && anchorElNav) {
        handleCloseNavMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [anchorElNav]);

  return (
    <AppBar position="fixed" sx={{ ...appbarItemStyles }}>
      <Container maxWidth='false' sx={{
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        <Toolbar disableGutters >
          {/* (PC) - Logo */}
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleLogoClick}
              sx={{
                ...logoStyles,
                mr: 2,
                flexDirection: 'culumn',
                display: { xs: 'none', md: 'flex' },
                transition: '0.3s',              // Smooth transition
                '&:hover': {
                  transform: 'scale(1.05)',      // Slight scaling effect on hover
                },
              }}
            >
              {logo}
              <Box ml={2}>
                <Typography variant="h7" noWrap sx={{ color: colors.white, }} style={{ marginTop: '30px' }} >AMEL MEMIC </Typography>

              </Box>
            </Typography>
          </Box>

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

            {/* (Mobile) - Menu */}
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
                  sx={{ ...menuItemStyles }}>
                  <Typography sx={{ textAlign: 'center', ...pagesItemStyles }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* (PC) - Display Pages */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)} // Handle click here
                sx={{
                  ...pagesItemStyles,
                  my: 2,
                  display: 'block',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: colors.darkbrown,
                  },
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