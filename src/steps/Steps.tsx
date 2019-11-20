import React from 'react'

import SubscriptionOptions from './SubscriptionOptions'
import UserDetails from './UserDetails'
import PaymentDetails from './PaymentDetails'
import TermsAndConditions from './TermsAndConditions'
import { TCollector } from '../useCollector'
import { TStep } from '../useStep'
import { TPrice } from '../usePrice'

type TProps = {
  step: TStep
  collector: TCollector
  price: TPrice
}

export default ({ step, collector, price }: TProps) => {
  return (
    <React.Fragment>
      <SubscriptionOptions
        visible={step.value === 1}
        updatePrice={price.updatePrice}
        onSubmit={data => {
          collector.collectSubscriptionOptions(data)
          step.nextStep()
        }}
      />
      <UserDetails
        visible={step.value === 2}
        onSubmit={data => {
          collector.collectUserDetails(data)
          step.nextStep()
        }}
        onBack={() => {
          collector.collectUserDetails()
          step.previousStep()
        }}
      />
      <PaymentDetails
        visible={step.value === 3}
        onSubmit={data => {
          collector.collectPaymentDetails(data)
          step.nextStep()
        }}
        onBack={() => {
          collector.collectPaymentDetails()
          step.previousStep()
        }}
      />
      <TermsAndConditions
        visible={step.value === 4}
        onSubmit={data => {
          collector.collectTermsAndConditions(data)
        }}
        onBack={() => {
          step.previousStep()
        }}
      />
    </React.Fragment>
  )
}
