import { useState } from 'react'

import { TSubscriptionOptionsData } from './steps/SubscriptionOptions'
import { TUserDetailsData } from './steps/UserDetails'
import { TPaymentDetailsData } from './steps/PaymentDetails'
import { TTermsAndConditionsData } from './steps/TermsAndConditions'

export type TCollectorValue = {
  done: boolean
  data: {
    subscriptionOptions?: TSubscriptionOptionsData
    userDetails?: TUserDetailsData
    paymentDetails?: TPaymentDetailsData
    termsAndConditions?: TTermsAndConditionsData
  }
}

export type TCollector = {
  value: TCollectorValue
  collectSubscriptionOptions: (data?: TSubscriptionOptionsData) => void
  collectUserDetails: (data?: TUserDetailsData) => void
  collectPaymentDetails: (data?: TPaymentDetailsData) => void
  collectTermsAndConditions: (data?: TTermsAndConditionsData) => void
}

export default (): TCollector => {
  const [value, setValue] = useState<TCollectorValue>({ done: false, data: {} })

  const collectSubscriptionOptions = (o?: TSubscriptionOptionsData) => {
    setValue({
      ...value,
      data: {
        ...value.data,
        subscriptionOptions: o,
      },
    })
  }
  const collectUserDetails = (o?: TUserDetailsData) => {
    setValue({
      ...value,
      data: {
        ...value.data,
        userDetails: o,
      },
    })
  }
  const collectPaymentDetails = (o?: TPaymentDetailsData) => {
    setValue({
      ...value,
      data: {
        ...value.data,
        paymentDetails: o,
      },
    })
  }
  const collectTermsAndConditions = (o?: TTermsAndConditionsData) => {
    setValue({
      ...value,
      done: true,
      data: {
        ...value.data,
        termsAndConditions: o,
      },
    })
  }

  return {
    value,
    collectSubscriptionOptions,
    collectUserDetails,
    collectPaymentDetails,
    collectTermsAndConditions,
  }
}
