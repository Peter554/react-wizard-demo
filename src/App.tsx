import React from 'react'
import { ThemeProvider } from 'styled-components'

import useStep from './useStep'
import {
  useUserDetailsFormik,
  usePaymentDetailsFormik,
  useTermsAndConditionsFormik,
  useSubscriptionOptionsFormik,
} from './steps/formiks'
import Main from './layout/Main'
import Steps from './steps/Steps'
import Summary from './summary/Summary'
import { Greeting } from './Greeting'

import './css/reset.css'
import './css/global.css'
import { theme } from './theme'
import { logOnComplete } from './logOnComplete'

export default () => {
  const step = useStep()

  const subscriptionOptionsFormik = useSubscriptionOptionsFormik(() => {
    step.nextStep()
  })

  const userDetailsFormik = useUserDetailsFormik(() => {
    step.nextStep()
  })

  const paymentDetailsFormik = usePaymentDetailsFormik(() => {
    step.nextStep()
  })

  const termsAndConditionsFormik = useTermsAndConditionsFormik(() => {
    logOnComplete({
      subscriptionOptionsFormik,
      userDetailsFormik,
      paymentDetailsFormik,
      termsAndConditionsFormik,
    })
  })

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Greeting />
        <Steps
          step={step}
          subscriptionOptionsFormik={subscriptionOptionsFormik}
          userDetailsFormik={userDetailsFormik}
          paymentDetailsFormik={paymentDetailsFormik}
          termsAndConditionsFormik={termsAndConditionsFormik}
        />
        <Summary
          step={step}
          subscriptionOptionsFormik={subscriptionOptionsFormik}
          userDetailsFormik={userDetailsFormik}
          paymentDetailsFormik={paymentDetailsFormik}
        />
      </Main>
    </ThemeProvider>
  )
}
