// theme.d.ts

import {
	PaletteOptions,
	PaletteColorOptions,
} from '@mui/material/styles/createPalette';

export interface CustomPaletteColorOptions extends PaletteColorOptions {
	lighter?: string;
	darker?: string;
}

export interface CustomPaletteOptions extends PaletteOptions {
	neutral: CustomPaletteColorOptions;
}

export interface Theme {
	palette?: CustomPaletteOptions;
}
