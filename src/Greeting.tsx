import React from 'react'
import { Music } from 'react-feather'

import { AppH1 } from './layout/AppHeadings'
import { AppHr } from './layout/AppHr'
import { withTheme, DefaultTheme } from 'styled-components'

export const Greeting = withTheme(({ theme }: { theme: DefaultTheme }) => {
  return (
    <React.Fragment>
      <AppH1>
        MoBeats <Music size="1.75rem" color={theme.colors.primary} /> sign up
      </AppH1>
      <p>
        Thanks for signing up to MoBeats! Just fill out this form and we'll get
        you up and running in no time. You'll be changed $2 per month per GB.
        And there's a 10% discount if you can make the payment now!
      </p>
      <AppHr />
    </React.Fragment>
  )
})
