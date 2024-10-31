import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Material UI components
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

const menuItemStyles = {
  backgroundColor: colors.white,

};


const pagesItemStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: '1.2rem',
  color: {
    xs: colors.black,
    md: colors.black,
  },
  '&:hover, &:active': {
    color: colors.orange,

  },
}

const contactInfoStyles = {
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  gap: '20px', // Adjust spacing as needed
  fontFamily: 'monospace',
  fontWeight: 1200,
};

const appbarItemStyles = {
  backgroundColor: colors.white,
  color: colors.black,
  transition: 'background-color 0.3s', // Smooth transition
  '&:hover, &:active': {
    // backgroundColor: colors.orange, // Change this to your desired hover color
    //  color: colors.white,
  },
};

const logo = (
  <img src="/assets/logo-test.webp" alt="Logo" style={{ height: '40px' }} />
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
      <Container maxWidth="false" sx={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Toolbar disableGutters sx={{ flexDirection: 'column', alignItems: 'center' }}>

          {/* Logo and Pages on the Same Line */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Logo */}
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
                ml: 2,
              }}
            >
              UNGER
            </Typography>

            {/* Desktop Navigation Links */}
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

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>

              {/* Mobile Dropdown Menu */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                PaperProps={{ sx: { margin: 0, padding: 0 } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handlePageClick(page)}
                    sx={{ ...menuItemStyles, padding: '10px 20px' }}
                  >
                    <Typography sx={{ textAlign: 'center', ...pagesItemStyles }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* Contact Information below in a Row */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', mt: 1 }}>
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