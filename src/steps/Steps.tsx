import React from 'react'
import { UseFormik } from 'formik'

import { TStep } from '../useStep'
import {
  TSubscriptionOptionsData,
  TUserDetailsData,
  TPaymentDetailsData,
  TTermsAndConditionsData,
} from './formiks'
import SubscriptionOptions from './SubscriptionOptions'
import UserDetails from './UserDetails'
import PaymentDetails from './PaymentDetails'
import TermsAndConditions from './TermsAndConditions'

type TProps = {
  step: TStep
  subscriptionOptionsFormik: UseFormik<TSubscriptionOptionsData>
  userDetailsFormik: UseFormik<TUserDetailsData>
  paymentDetailsFormik: UseFormik<TPaymentDetailsData>
  termsAndConditionsFormik: UseFormik<TTermsAndConditionsData>
}

export default ({
  step,
  subscriptionOptionsFormik,
  userDetailsFormik,
  paymentDetailsFormik,
  termsAndConditionsFormik,
}: TProps) => {
  return (
    <React.Fragment>
      <SubscriptionOptions
        visible={step.value === 1}
        formik={subscriptionOptionsFormik}
      />
      <UserDetails
        visible={step.value === 2}
        formik={userDetailsFormik}
        onBack={() => {
          step.previousStep()
        }}
      />
      <PaymentDetails
        visible={step.value === 3}
        formik={paymentDetailsFormik}
        onBack={() => {
          step.previousStep()
        }}
      />
      <TermsAndConditions
        visible={step.value === 4}
        formik={termsAndConditionsFormik}
        onBack={() => {
          step.previousStep()
        }}
      />
    </React.Fragment>
  )
}
