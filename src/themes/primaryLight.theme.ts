import { createTheme } from '@mui/material/styles'

export const primaryLightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#ff0000',
		},
		secondary: {
			main: '#4baaea',
		},
		error: {
			main: '#ff0e0e'
		},
		warning: {
			main: '#ffd500',
		},
		info: {
			main: '#ff1d73',
		},
		success: {
			main: '#2cff53',
		},
		background: {
			paper: '#f4f4f4',
			default: '#ededed',
		},
		highlight: {
			yellow: 'yellow',
		},
	},
	shape: {
		borderRadius: 3
	}
})
