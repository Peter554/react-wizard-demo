import * as yup from 'yup'

const dateRegex = /^([0-9]{4}[-]?((0[13-9]|1[012])[-]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-]?31|02[-]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-]?02[-]?29)$/

export const subscriptionOptionsFormSchema = yup.object().shape({
  durationMonths: yup
    .number()
    .required()
    .integer()
    .oneOf([3, 6, 12]),
  amountGB: yup
    .number()
    .required()
    .integer()
    .oneOf([3, 5, 10, 20, 30, 50]),
  payUpfront: yup.boolean().required(),
})

export const userDetailsFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .max(50, 'First name must be less than 50 characters long'),
  lastName: yup
    .string()
    .required('Last name is required')
    .max(50, 'Last name must be less than 50 characters long'),
  emailAddress: yup
    .string()
    .required('Email address is required')
    .max(100, 'Email address must be less than 50 characters long')
    .email('Email address must be a valid email address'),
  streetAddress: yup
    .string()
    .required('Street address is required')
    .max(500, 'Street address must be less than 50 characters long'),
})

export const paymentDetailsFormSchema = yup.object().shape({
  creditCardNumber: yup
    .string()
    .required('Credit card number is required')
    .matches(/^\d+$/, 'Credit card number must be a number'),
  creditCardExpires: yup
    .string()
    .required('Expiry date is required')
    .matches(dateRegex, 'Expiry date must be valid date')
    .nullable(),
  creditCardSecurityCode: yup
    .string()
    .required('Security code is required')
    .matches(/^\d{3}$/, 'Security code must be a 3 digit number'),
})

export const termsAndConditionsFormSchema = yup.object().shape({
  acceptedTerms: yup
    .boolean()
    .required()
    .oneOf([true], 'You must accept our terms and conditions to continue'),
})
