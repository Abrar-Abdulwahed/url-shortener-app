import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, useTheme, AppBar, Container, Box, Typography, Button, Menu, Toolbar, IconButton, MenuItem} from '@mui/material';

const pages = ['Features', 'Pricing', 'Resources'];
const NavBar = () => {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <Container>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <img
                    src="/logo.svg"
                    alt="url-shortener Logo"
                    width={100}
                    height={24}
                />

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
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
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Box sx={{ marginInlineStart: '20px', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ color: 'neutral.main', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Stack direction='row' justifyContent='space-between'>
                    <Button
                        onClick={handleCloseNavMenu}
                        size="small"
                        sx={{ color: 'neutral.main', fontWeight: 'fontWeightMedium' }}
                    >
                        login
                    </Button>
                    <Button
                        onClick={handleCloseNavMenu}
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 'fontWeightMedium', color: 'white' }}
                        >
                        Sign up
                    </Button>
                </Stack>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar