import { Shape, ShapeOptions, ThemeOptions } from '@mui/system'

declare module '@mui/material/styles' {
	interface Palette {
		highlight?: {
			yellow?: string
			green?: string
			pink?: string
		}
	}

	interface PaletteOptions {
		highlight?: {
			yellow?: string
			green?: string
			pink?: string
		}
	}
}
