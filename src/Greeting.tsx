import React from 'react'
import { Music } from 'react-feather'
import styled, { withTheme, DefaultTheme } from 'styled-components'

import { AppH1 } from './layout/AppHeadings'
import { AppHr } from './layout/AppHr'

export const Greeting = withTheme(({ theme }: { theme: DefaultTheme }) => {
  return (
    <React.Fragment>
      <AppH1>
        MoBeats
        <IconLink
          href="https://github.com/Peter554/react-wizard-demo"
          target="_blank"
        >
          <Music size={32} />
        </IconLink>
        sign up
      </AppH1>
      <p>
        Thanks for signing up to MoBeats! Just fill out this form and we'll get
        you up and running in no time. You'll be charged $2 per month per GB.
        And there's a 10% discount if you can make the payment now!
      </p>
      <AppHr />
    </React.Fragment>
  )
})

const IconLink = styled.a`
  padding: 0.5rem;

  color: ${props => props.theme.colors.primary}

  &:focus,
  &:active,
  &:hover {
    outline: none;
    color: ${props => props.theme.colors.primaryFocus}
  }
`
