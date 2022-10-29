// create context from react
import { createContext, useMemo, useState } from 'react';
import { createTheme } from '@material-ui/core';

export const themes = (theme: any) => ({
  ...(theme === 'light' ? lightTheme : darkTheme),
});

//TODO Fix this colors theme

const darkTheme = {
  black: {
    100: '#e0ccee',
    200: '#c199dd',
    300: '#a266cb',
    400: '#8333ba',
    500: '#222831',
    600: '#500087',
    700: '#3c0065',
    800: '#280044',
    900: '#140022',
  },
  grey: {
    100: '#d3d4d6',
    200: '#a7a9ad',
    300: '#7a7e83',
    400: '#4e535a',
    500: '#222831',
    600: '#1b2027',
    700: '#14181d',
    800: '#0e1014',
    900: '#07080a',
  },
  red: {
    100: '#fbe1cc',
    200: '#f7c499',
    300: '#f4a666',
    400: '#f08933',
    500: '#ec6b00',
    600: '#bd5600',
    700: '#8e4000',
    800: '#5e2b00',
    900: '#2f1500',
  },
};

const lightTheme = {
  black: {
    100: '#140022',
    200: '#280044',
    300: '#3c0065',
    400: '#500087',
    500: '#6400a9',
    600: '#8333ba',
    700: '#a266cb',
    800: '#c199dd',
    900: '#e0ccee',
  },
  grey: {
    100: '#ffffff',
    200: '#0e1014',
    300: '#14181d',
    400: '#1b2027',
    500: '#222831',
    600: '#4e535a',
    700: '#7a7e83',
    800: '#a7a9ad',
    900: '#d3d4d6',
  },
  red: {
    100: '#2f1500',
    200: '#5e2b00',
    300: '#8e4000',
    400: '#bd5600',
    500: '#ec6b00',
    600: '#f08933',
    700: '#f4a666',
    800: '#f7c499',
    900: '#fbe1cc',
  },
};

//mui theme settings
export const themeSettings = (theme: any) => {
  const colors = themes(theme);

  return {
    palette: {
      mode: theme,
      ...(theme === 'dark'
        ? {
            primary: {
              main: colors.red[500],
            },
            secondary: {
              main: '#a3a3a3',
            },
            background: {
              default: colors.black[500],
              paper: colors.grey[700],
            },
            text: {
              primary: colors.grey[100],
              secondary: colors.grey[300],
            },
          }
        : {
            primary: {
              main: colors.red[500],
            },
            secondary: {
              main: colors.black[500],
            },
            background: {
              default: colors.grey[100],
              paper: colors.grey[300],
            },
            text: {
              primary: colors.grey[900],
              secondary: colors.grey[700],
            },
          }),
    },
    typography: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
      h3: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
      h4: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
      },
    },
  };
};

// creeate context for the color theme
export const ThemeContext = createContext({
  toggleTheme: () => {},
});

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const value = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  return { value, toggleTheme };
};
