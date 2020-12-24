import React from 'react';
import _ from 'lodash';
import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core';
import { esES } from '@material-ui/core/locale';
  
import typography from './typography';

const THEMES = {
    LIGHT: 'LIGHT',
  };
  
const baseOptions = {
  direction: 'ltr',
  locale: esES,
  typography,
  props: {
    MuiTextField: {
        variant: 'outlined'
    },
    esES
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    },

    MuiToggleButton: {
      // Override the styling for selected toggle buttons
      root: {
        color: '#001871',
        backgroundColor: "transparent",
        '&$selected': {
          backgroundColor: '#001871',
          color:'white'
        },
        '&$disabled': {
          color: 'white',
        },
        '&:hover': {
          backgroundColor: "$labelcolor"
        }
      }
    }
  }
};

const themesOptions = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#f4f8f9',
        paper: colors.common.white
      },
      primary: {
        main: colors.indigo[600],
        paleBlue: '#C7DBF4'
      },
      secondary: {
        main: '#001871'
      },
      text: {
        primary: '#343741',
        secondary: '#5D738D'
      }
    },
  }
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    esES,
    _.merge(
      {},
      baseOptions,
      themeOptions,
    ), esES
  );

  theme = responsiveFontSizes(theme);

  return theme;
}
