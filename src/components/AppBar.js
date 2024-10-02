import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Material UI components
import { AppBar, Box, Toolbar, Container, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const pages = ['Home', 'Leistungen', 'Kontakt', 'Vita'];
const leistungenSubmenu = [
  'Trockenbau',
  'Maurerarbeiten',
  'Um - @ Anbauten',
  'Maler und Spachtelarbeiten',
  'Putzabeiten',
];

const leistungenRoutes = {
  'Trockenbau': '/trackenbau',
  'Maurerarbeiten': '/maurerbeiten',
  'Um - @ Anbauten': '/um-anbauten',
  'Maler und Spachtelarbeiten': '/maler-und-spachtelarbeiten',
  'Putzabeiten': '/putzabeiten',
};

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
    // backgroundColor: colors.gray,
  },
};

const leistungenItemStyles = {
  fontFamily: 'monospace',
  fontWeight: 700,
  cursor: 'pointer',
  textDecoration: 'none',
  backgroundColor: colors.white,
  color: colors.gray,
}

const pagesItemStyles = { 
  fontFamily: 'monospace',
  fontWeight: 700,
  color: {
    xs: colors.gray,  
    md: colors.white,  
  }, 
};

const appbarItemStyles = {
  backgroundColor: colors.gray,
  color: colors.white,
};

const logo = (
  <img src="/assets/logo-test.png" alt="Logo" style={{ height: '40px' }} />
);

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElLeistungen, setAnchorElLeistungen] = React.useState(null); 
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    event.preventDefault();
    setAnchorElNav(event.currentTarget);
    document.body.classList.add('no-scroll'); 
    console.log('Scroll disabled');
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElLeistungen(null); // Close Leistungen submenu on menu close
    document.body.classList.remove('no-scroll'); 
    console.log('Scroll enabled');
  };

  const handlePageClick = (page) => { 
    if (page === 'Leistungen') {
      setAnchorElLeistungen((prev) => prev ? null : anchorElNav); // Toggle Leistungen submenu
      return;
    }
    const route = `/${page.toLowerCase()}`;
    navigate(route);
    handleCloseNavMenu();
  };

  const handleLogoClick = () => {
    navigate('/home'); 
  };

  const handleCloseLeistungenMenu = () => {
    setAnchorElLeistungen(null);
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
      <Container maxWidth='false' sx={{ 
        maxWidth: '1100px',  
        margin: '0 auto'}}>  {/* Centers AppBar to middle */}
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
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {logo} 
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
                <div key={page}>
                  <MenuItem 
                    onClick={() => handlePageClick(page)} 
                    sx={{ ...menuItemStyles }}>

                    <Typography sx={{ textAlign: 'center', ...pagesItemStyles }}>
                      {page}
                      {page === 'Leistungen' && (
                        <span style={{marginLeft: '8px', color: colors.orange}}>▼</span>
                      )}
                    </Typography>
                  </MenuItem>
                  
                  {/* Conditionally render the submenu items if 'Leistungen' is clicked */}
                  {page === 'Leistungen' && anchorElLeistungen && (
                    leistungenSubmenu.map((item) => (
                      <MenuItem
                        key={item}
                        onClick={() => {
                          navigate(leistungenRoutes[item]);
                          handleCloseNavMenu();
                        }}
                        sx={{ ...menuItemStyles, pl: 4 }} // Removed position and top/left styles
                      >
                        <Typography sx={{...leistungenItemStyles}}>{item}</Typography>
                      </MenuItem>
                    ))
                  )}
                </div>
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
            {logo}
          </Typography>

          {/* (PC) - Display Pages */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {pages.map((page) =>
              page === 'Leistungen' ? (
                <Box key={page} sx={{ position: 'relative' }}>
                  <Button
                    key={page}
                    onClick={(event) => {
                      setAnchorElLeistungen((prev) => prev ? null : event.currentTarget); // Set the anchor element to the button
                    }} 
                    sx={{
                      ...pagesItemStyles,
                      my: 2,
                      display: 'block',
                      paddingRight: '20px',
                      '&::after': {
                        color: colors.orange,
                        content: '"▼"',
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)', // Center vertically
                      },
                    }}
                  >
                    {page}
                  </Button>
                  {anchorElLeistungen && (
                    <Menu
                      anchorEl={anchorElLeistungen}
                      open={Boolean(anchorElLeistungen)}
                      onClose={handleCloseLeistungenMenu}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'absolute', // Ensures it's positioned relative to the parent
                      }}
                    >
                      {leistungenSubmenu.map((item) => (
                        <MenuItem
                          key={item}
                          onClick={() => {
                            navigate(leistungenRoutes[item]);
                            handleCloseLeistungenMenu();
                          }}
                          sx={{ ...menuItemStyles
                            
                           }}
                        >
                          <Typography sx={{...leistungenItemStyles}}>{item}</Typography>      
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ) : (
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
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
