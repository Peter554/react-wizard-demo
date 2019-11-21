import * as yup from 'yup'
import { useFormik, UseFormik } from 'formik'

import {
  subscriptionOptionsFormSchema,
  userDetailsFormSchema,
  paymentDetailsFormSchema,
  termsAndConditionsFormSchema,
} from './formSchema'

type OnSubmit<T> = (data: T) => void

export type TSubscriptionOptionsData = yup.InferType<
  typeof subscriptionOptionsFormSchema
>

export type TUserDetailsData = yup.InferType<typeof userDetailsFormSchema>

export type TPaymentDetailsData = yup.InferType<typeof paymentDetailsFormSchema>

export type TTermsAndConditionsData = yup.InferType<
  typeof termsAndConditionsFormSchema
>

export const useSubscriptionOptionsFormik = (
  onSubmit: OnSubmit<TSubscriptionOptionsData>
): UseFormik<TSubscriptionOptionsData> => {
  return useFormik<TSubscriptionOptionsData>({
    initialValues: {
      durationMonths: 12,
      amountGB: 5,
      payUpfront: false,
    },
    validationSchema: subscriptionOptionsFormSchema,
    onSubmit,
  })
}

export const useUserDetailsFormik = (
  onSubmit: OnSubmit<TUserDetailsData>
): UseFormik<TUserDetailsData> => {
  return useFormik<TUserDetailsData>({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      streetAddress: '',
    },
    validationSchema: userDetailsFormSchema,
    onSubmit,
  })
}

export const usePaymentDetailsFormik = (
  onSubmit: OnSubmit<TPaymentDetailsData>
): UseFormik<TPaymentDetailsData> => {
  return useFormik<TPaymentDetailsData>({
    initialValues: {
      creditCardNumber: '',
      creditCardExpires: '',
      creditCardSecurityCode: '',
    },
    validationSchema: paymentDetailsFormSchema,
    onSubmit,
  })
}

export const useTermsAndConditionsFormik = (
  onSubmit: OnSubmit<TTermsAndConditionsData>
): UseFormik<TTermsAndConditionsData> => {
  return useFormik<TTermsAndConditionsData>({
    initialValues: {
      acceptedTerms: false,
    },
    validationSchema: termsAndConditionsFormSchema,
    onSubmit,
  })
}
