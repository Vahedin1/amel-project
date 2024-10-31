import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppBar, Box, Toolbar, Container, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon, LocalPhone as LocalPhoneIcon, Email as EmailIcon } from '@mui/icons-material';

const pages = ['Home', 'Leistungen', 'Kontakt', 'Vita'];

const colors = {
  white: '#FFFFFF',
  orange: '#FF6A1A',
  brown: '#532912',
  gray: '#7A7979',
  orange2: '#AA4D1B',
  darkbrown: '#29180E',
  black: "#000000",
};

const logoStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
};

const pagesItemStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: colors.black,
  '&:hover, &:active': {
    color: colors.orange,
  },
};

const contactInfoStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  fontFamily: 'monospace',
  fontWeight: 700,
};

const appbarItemStyles = {
  backgroundColor: colors.white,
  color: colors.black,
  transition: 'background-color 0.3s',
};

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
    const route = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
    navigate(route);
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
      <Container maxWidth="false" sx={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Toolbar disableGutters sx={{ flexDirection: 'column', alignItems: 'center' }}>

          {/* Centered Logo and Pages for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: '40px', mb: 1 }}>
            <Typography
              variant="h2"
              noWrap
              onClick={handleLogoClick}
              sx={{
                ...logoStyles,
                color: colors.black,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              UNGER
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{
                    ...pagesItemStyles,
                    '&:hover': { transform: 'scale(1.1)' },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'absolute', left: '20px', top: '5px' }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography sx={pagesItemStyles}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Contact Information below the centered content */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px', mt: 1 }}>
            <Box sx={{ ...contactInfoStyles, gap: '5px' }}>
              <LocalPhoneIcon />
              <Typography variant="body1" sx={{ color: colors.black }}>0162 420 66 78</Typography>
            </Box>
            <Box sx={{ ...contactInfoStyles, gap: '5px' }}>
              <EmailIcon />
              <Typography variant="body1" sx={{ color: colors.black }}>info@unger.de</Typography>
            </Box>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
