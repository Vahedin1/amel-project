import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppBar, Box, Toolbar, Container, Button, MenuItem, Typography, IconButton, Dialog } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, LocalPhone as LocalPhoneIcon, Email as EmailIcon } from '@mui/icons-material';

const pages = ['Home', 'Leistungen', 'Kontakt', 'Über uns'];

const colors = {
  white: '#FFFFFF',
  orange: '#FF6A1A',
  brown: '#532912',
  gray: '#e6e1e1',
  orange2: '#AA4D1B',
  darkbrown: '#29180E',
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

const pagesItemStyles = {
  fontFamily: 'Bahnschrift, Arial, sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: colors.white,
  '&:hover, &:active': {
    color: colors.orange,
  },
};

const contactInfoStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  fontFamily: 'Bahnschrift, Arial, sans-serif',
  fontWeight: 700,
};

const appbarItemStyles = {
  backgroundColor: colors.black,
  color: colors.white,
  transition: 'background-color 0.3s',
};

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const [showLogo, setShowLogo] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = () => {
    setOpen(true);
    document.body.classList.add('no-scroll');
  };

  const handleCloseNavMenu = () => {
    setOpen(false);
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
      if (window.innerWidth >= 600 && open) {
        handleCloseNavMenu();
      }
    };

    const handleScroll = () => {
      if (location.pathname === '/') {
        setShowLogo(window.scrollY > 100);
      }
    };

    // Reset showLogo when navigating away from Home
    if (location.pathname !== '/') {
      setShowLogo(true);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open, location.pathname]);

  return (
    <AppBar position="fixed" sx={{ ...appbarItemStyles, boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", }}>
      <Container maxWidth="false" sx={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Toolbar disableGutters sx={{ width: '100%' }}>

          {/* Centered Logo and Pages for Desktop */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '40px',
          }}>
            {/* Logo Section */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center', gap: '40px' }}>
              {showLogo && (
                <Box
                  component="img"
                  src="assets/logo bez slogan2.png"
                  alt="Logo"
                  onClick={handleLogoClick}
                  sx={{
                    ...logoStyles,
                    height: '75px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              )}

              {/* Pages Section */}
              <Box sx={{ display: 'flex', gap: '20px' }}>
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

            {/* Contact Information Section */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, gap: '20px', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <LocalPhoneIcon />
                <Typography noWrap variant="body1" sx={{ ...appbarItemStyles }}>0162 420 66 78</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <EmailIcon />
                <Typography noWrap variant="body1" sx={{ ...appbarItemStyles }}>info@unger.de</Typography>
              </Box>
            </Box>
          </Box>
          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'absolute', left: '5px', top: '7px' }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Full-Screen Dialog for Mobile Menu */}
          <Dialog
            fullScreen
            open={open}
            onClose={handleCloseNavMenu}
            sx={{
              '& .MuiDialog-paper': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.black,
                padding: 0,
                margin: 0,
              },
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleCloseNavMenu}
              sx={{
                position: 'absolute',
                top: '100px',          // Adjust this value to move the button higher or lower as needed
                left: '50%',          // Center horizontally
                transform: 'translateX(-50%)',
                color: colors.orange,
                backgroundColor: colors.gray,
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  background: colors.orange,
                  color: colors.white,
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Menu Items */}
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handlePageClick(page)}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  marginTop: '0px',
                }}
              >
                <Typography sx={{ ...pagesItemStyles }}>{page}</Typography>
              </MenuItem>
            ))}
          </Dialog>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
