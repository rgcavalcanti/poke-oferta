import { DefaultTheme } from "styled-components"

import defaultTheme from 'themes/defaultTheme';

const grassTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    main: '#295135',
    secondary: '#edf6f9',
    white: '#fefffe',
    black: '#242325',
    contrast: '#067bc2',
    disabled: '#e5e7e6'
  }
}

export default grassTheme;