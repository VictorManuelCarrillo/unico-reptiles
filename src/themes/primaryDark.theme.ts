import { createTheme } from '@mui/material/styles'
// import '@fontsource/anton'
// // Anton, sans-serif
// import '@fontsource/dm-mono'
// // Dm mono, monospace
// import '@fontsource-variable/urbanist'
// Urbanist Variable, sans-serif

export const primaryDarkTheme = createTheme({
	typography: {
		// h1: {
		// 	fontFamily: 'Anton, sans-serif',
		// },
	},
	palette: {
		mode: 'dark',
		common: {
			black: '#000',
			white: '#fff',
		},
		primary: {
			main: '#8BD5E4',
		},
		secondary: {
			main: '#EEC718',
		},
		warning: {
			main: '#F54900',
		},
		info: {
			main: '#9635AC',
		},
		success: {
			main: '#63CF48',
		},
		highlight: {
			yellow: 'yellow',
		},
		background: {
			default: '#152639',
			paper: '485A60',
		},
	},
	shape: {
		borderRadius: 8
	}
})
