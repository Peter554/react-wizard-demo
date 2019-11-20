import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryFocus: string
      mutedPrimary: string
      mutedPrimaryFocus: string
      error: string
      inputBorder: string
      inputBorderFocus: string
      label: string
    }
  }
}
