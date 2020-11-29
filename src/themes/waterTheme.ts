import { DefaultTheme } from "styled-components"

import defaultTheme from 'themes/defaultTheme';

const waterTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    main: '#628395',
    secondary: '#e9ebf8',
    white: '#fefffe',
    black: '#242325',
    contrast: '#e3655b',
  }
}

export default waterTheme;