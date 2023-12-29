import { createTheme } from '@mui/material';
import { Theme, CustomPaletteOptions } from './theme.d';
import { TypographyOptions } from '@mui/material/styles/createTypography'; // Correct import

// Colors
const colors = {
	primary: {
		cyan: 'hsl(180, 66%, 49%)',
		darkViolet: 'hsl(257, 27%, 26%)',
	},
	secondary: {
		red: 'hsl(0, 87%, 67%)',
	},
	neutral: {
		gray: 'hsl(0, 0%, 75%)',
		grayishViolet: 'hsl(257, 7%, 63%)',
		veryDarkBlue: 'hsl(255, 11%, 22%)',
		veryDarkViolet: 'hsl(260, 8%, 14%)',
	},
};

// Typography
const typography: TypographyOptions = {
	fontFamily: 'Poppins, sans-serif',
	fontWeightBold: 700,
	fontWeightMedium: 500,
};

// Create the theme
const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 700,
					padding: '5px 20px',
					textTransform: 'capitalize',
					borderRadius: '50px',
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: 'none',
					cursor: 'pointer',
				},
			},
		},
	},
	palette: {
		primary: {
			main: colors.primary.cyan,
			dark: colors.primary.darkViolet,
		},
		secondary: {
			main: colors.secondary.red,
		},
		neutral: {
			main: colors.neutral.gray,
			light: colors.neutral.grayishViolet,
			lighter: '#f0f1f6',
			dark: colors.neutral.veryDarkBlue,
			darker: colors.neutral.veryDarkViolet,
		},
	} as CustomPaletteOptions,
	typography,
	shadows: ['none'],
} as Theme);

theme.typography.h2 = {
	...typography,
	fontSize: '1.3rem',
	[theme.breakpoints.up('md')]: {
		fontSize: '1.8rem',
	},
	[theme.breakpoints.up('lg')]: {
		fontSize: '2.8rem',
	},
};

export default theme;
