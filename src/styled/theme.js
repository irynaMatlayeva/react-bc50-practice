import { orange, purple, brown } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});
export const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
      light: '#fff',
    },
    secondary: {
      main: purple[400],
    },
    info: {
      main: brown[400],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 780,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Caudex', 'serif', 'Poppins', 'sans-serif'].join(','),
    htmlFontSize: 10,
    h5: {
      fontFamily: 'Caudex',
      fontWeight: 700,
      fontSize: 40,
      [breakpoints.down('md')]: {
        fontSize: 36,
      },
      color: '#0C121A',
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: 36,
      color: '#0C121A',
    },
    subtitle1: {
      fontFamily: 'Poppins',
      fontSize: 24,
      color: '#0C121A',
    },
    subtitle2: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 22,
      color: '#0C121A',
    },
    body1: {
      fontFamily: 'Poppins',
      fontSize: 20,
      color: '#0C121A',
    },
    body2: {
      fontFamily: 'Poppins',
      fontSize: 18,
      color: '#0C121A',
      opacity: 0.7,
    },
    body3: {
      fontFamily: 'Poppins',
      fontSize: 16,
      color: '#0C121A',
    },
    body3Opacity: {
      fontFamily: 'Poppins',
      fontSize: 16,
      color: '#0C121A',
      opacity: 0.7,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: ({ theme: t }) => ({
            backgroundColor: t.palette.primary.light,
            fontFamily: 'Poppins',
            fontSize: 22,
            color: t.palette.primary.light,

            '&:hover': {
              backgroundColor: t.palette.primary.main,
            },
          }),
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: ({ theme: t }) => ({
            fontFamily: 'Poppins',
            fontSize: 22,
            color: t.palette.secondary.light,
            border: '2px solid',
            borderColor: t.palette.secondary.light,

            '&:hover': {
              backgroundColor: 'inherit',
              border: '2px solid',
              borderColor: t.palette.secondary.main,
              color: t.palette.secondary.main,

              '& .MuiSvgIcon-root': {
                color: t.palette.secondary.main,
              },
            },
          }),
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          color: t.palette.primary,
          '&.Mui-checked': {
            color: t.palette.secondary.light,
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          minWidth: '100vw',
          padding: 0,
          margin: '0 auto',
          maxHeight: '100vh',
          fontFamily: 'Caudex',
          backgroundColor: '#F7F5F5',
        },
        html: {
          fontSize: '62.5%',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'pointer',
        },
        'a:not([class])': {
          textDecorationSkipInkkip: 'auto',
        },
        ol: {
          listStyle: 'none',
        },
        ul: {
          listStyle: 'none',
        },
      },
    },
  },
});
