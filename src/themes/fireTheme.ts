import { DefaultTheme } from "styled-components"

import defaultTheme from 'themes/defaultTheme';

const fireTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    main: '#ad2e24',
    secondary: '#fbfff1',
    white: '#fefffe',
    black: '#330a0c',
    contrast: '#ea8c55',
  }
}

export default fireTheme;