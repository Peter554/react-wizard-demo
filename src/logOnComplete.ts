import { UseFormik } from 'formik'

import {
  subscriptionOptionsFormSchema,
  userDetailsFormSchema,
  paymentDetailsFormSchema,
  termsAndConditionsFormSchema,
} from './steps/formSchema'
import {
  TSubscriptionOptionsData,
  TUserDetailsData,
  TPaymentDetailsData,
  TTermsAndConditionsData,
} from './steps/formiks'

type TArgs = {
  subscriptionOptionsFormik: UseFormik<TSubscriptionOptionsData>
  userDetailsFormik: UseFormik<TUserDetailsData>
  paymentDetailsFormik: UseFormik<TPaymentDetailsData>
  termsAndConditionsFormik: UseFormik<TTermsAndConditionsData>
}

export const logOnComplete = (args: TArgs) => {
  const {
    subscriptionOptionsFormik,
    userDetailsFormik,
    paymentDetailsFormik,
    termsAndConditionsFormik,
  } = args

  const toLog = {
    subscriptionOptions: subscriptionOptionsFormSchema.cast(
      subscriptionOptionsFormik.values
    ),
    userDetails: userDetailsFormSchema.cast(userDetailsFormik.values),
    paymentDetails: paymentDetailsFormSchema.cast(paymentDetailsFormik.values),
    termsAndConditions: termsAndConditionsFormSchema.cast(
      termsAndConditionsFormik.values
    ),
  }

  console.log(JSON.stringify(toLog, null, 2))
  alert('Your form has now been submitted.')
}
