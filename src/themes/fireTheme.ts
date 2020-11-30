import { DefaultTheme } from "styled-components"

import defaultTheme from 'themes/defaultTheme';

const fireTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    main: '#ad2e24',
    secondary: '#f3eec3',
    white: '#fefffe',
    black: '#242325',
    contrast: '#ea8c55',
  }
}

export default fireTheme;