import { useTheme } from '@emotion/react';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';

const Homepage = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const containerStyle = {
		backgroundImage: isSmallScreen
			? 'url("bg-boost-mobile.svg")'
			: 'url("/bg-boost-desktop.svg")',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '200px',
	};

	return (
		<Box
			bgcolor="primary.dark"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			sx={containerStyle}
		>
			<Typography variant="h4" my="16px" color="white" align="center">
				Boost your links today
			</Typography>
			<Button variant="contained" sx={{ color: 'white' }}>
				Get started
			</Button>
		</Box>
	);
};

export default Homepage;
