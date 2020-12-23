import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      light: string
      dark: string
    }
    fonts: {
      sansSerif: {
        thin: string
        regular: string
        bold: string
        black: string
      }
    }
  }
}