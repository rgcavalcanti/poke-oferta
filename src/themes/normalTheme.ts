import { DefaultTheme } from "styled-components"

import defaultTheme from 'themes/defaultTheme';

const normalTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    main: '#96897B',
    secondary: '#e9ebf8',
    white: '#fefffe',
    black: '#242325',
    contrast: '#8cb12f',
    disabled: '#e5e7e6'
  }
}

export default normalTheme;