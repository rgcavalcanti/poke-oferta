import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      main: string,
      secondary: string
    }

    colors: {
      main: string
      secondary: string
      contrast: string
      white: string
      black: string
      disabled: string
    }

    media: {
      mobileS: string
      mobileM: string
      mobileL: string
      tablet: string
      laptop: string
      laptopL: string
      desktop: string
      desktopL: string
    }

    device: {
      sizes: {
        mobileS: string
        mobileM: string
        mobileL: string
        tablet: string
        laptop: string
        laptopL: string
        desktop: string
      }
    }

    radius: string

    shadow: {
      default: string
      hover: string
    }
  }
}