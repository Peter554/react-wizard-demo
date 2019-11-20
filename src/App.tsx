import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Music } from 'react-feather'

import useStep from './useStep'
import useCollector from './useCollector'

import Main from './layout/Main'
import Steps from './steps/Steps'
import Summary from './summary/Summary'

import './css/reset.css'
import './css/global.css'
import { theme } from './theme'
import { AppH1 } from './layout/AppHeadings'
import { AppHr } from './layout/AppHr'
import { usePrice } from './usePrice'

export default () => {
  const collector = useCollector()
  const step = useStep()
  const price = usePrice()

  useEffect(() => {
    if (collector.value.done) {
      console.log(JSON.stringify(collector.value.data, null, 2))
      alert('Your form has now been submitted.')
    }
  }, [collector.value])

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <AppH1>
          MoBeats <Music size="1.75rem" color={theme.colors.primary} /> sign up
        </AppH1>
        <p>
          Thanks for signing up to MoBeats! Just fill out this form and we'll
          get you up and running in no time. You'll be changed $2 per month per
          GB. And there's a 10% discount if you can make the payment now!
        </p>
        <AppHr />
        <Steps step={step} collector={collector} price={price} />
        <Summary price={price} collector={collector} />
      </Main>
    </ThemeProvider>
  )
}
