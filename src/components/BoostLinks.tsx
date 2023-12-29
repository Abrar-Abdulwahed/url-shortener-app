import { useTheme } from '@emotion/react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import SectionHeading from './SectionHeading';

const BoostLinks = () => {
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
            <SectionHeading heading="Boost your links today" color="white" />
			<Button variant="contained" sx={{ color: 'white', fontWeight: 'fontWeightMedium' }}>
				Get started
			</Button>
		</Box>
	);
};

export default BoostLinks;
