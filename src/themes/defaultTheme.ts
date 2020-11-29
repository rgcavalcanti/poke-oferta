import { DefaultTheme } from "styled-components"

const sizes = {
  mobileS: '320px', // xs
  mobileM: '375px',
  mobileL: '425px', // sm
  tablet: '768px', // md
  laptop: '1024px', // lg
  laptopL: '1440px',
  desktop: '2560px' // xl
}

const defaultTheme: DefaultTheme = {
  font: {
    main: "'Roboto', sans-serif",
    secondary: "'Noto Sans JP', sans-serif",
  },

  colors: {
    main: '#a71d31',
    secondary: '#d8d8d8',
    contrast: '#e3655b',
    white: '#ffffea',
    black: '#0c120c',
    disabled: '#e5e7e6'

  },

  media: {
    mobileS: `@media (min-width: ${sizes.mobileS})`,
    mobileM: `@media (min-width: ${sizes.mobileM})`,
    mobileL: `@media (min-width: ${sizes.mobileL})`,
    tablet: `@media (min-width: ${sizes.tablet})`,
    laptop: `@media (min-width: ${sizes.laptop})`,
    laptopL: `@media (min-width: ${sizes.laptopL})`,
    desktop: `@media (min-width: ${sizes.desktop})`,
    desktopL: `@media (min-width: ${sizes.desktop})`,
  },

  device: {
    sizes
  },

  radius: '0.5rem',

  shadow: {
    default: '0px 2px 10px 0px rgba(0,0,0,0.5)',
    hover: '0px 2px 10px 0px rgba(0,0,0,0.5)'
  }
}

export default defaultTheme;