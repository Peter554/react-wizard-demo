import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { paymentDetailsFormSchema } from './formSchema'
import { WizardStep } from '../layout/WizardStep'
import { AppInput } from '../layout/AppInput'
import { AppLabel } from '../layout/AppLabel'
import { AppFormGroup } from '../layout/AppFormGroup'
import { AppForm } from '../layout/AppForm'
import { AppValidationError } from '../layout/AppValidationError'
import { AppH2 } from '../layout/AppHeadings'
import {
  ButtonBar,
  AppPrimaryButton,
  AppMutedButton,
  PaddedButtonText,
} from '../layout/Buttons'
import { Volume2 } from 'react-feather'

export type TPaymentDetailsData = yup.InferType<typeof paymentDetailsFormSchema>

type TProps = {
  onSubmit: (data: TPaymentDetailsData) => void
  onBack: () => void
  visible: boolean
}

export default ({ onSubmit, onBack, visible }: TProps) => {
  const formik = useFormik<TPaymentDetailsData>({
    initialValues: {
      creditCardNumber: '',
      creditCardExpires: '',
      creditCardSecurityCode: '',
    },
    validationSchema: paymentDetailsFormSchema,
    onSubmit: data => {
      data = paymentDetailsFormSchema.cast(data)
      onSubmit(data)
    },
  })

  return (
    <WizardStep visible={visible}>
      <AppH2>Payment details</AppH2>
      <AppForm id="payment-details-form" onSubmit={formik.handleSubmit}>
        <AppFormGroup>
          <AppLabel htmlFor="credit-card-number">Card number</AppLabel>
          <AppInput
            id="credit-card-number"
            name="creditCardNumber"
            value={formik.values.creditCardNumber}
            onChange={formik.handleChange}
            valid={
              !(
                formik.touched.creditCardNumber &&
                formik.errors.creditCardNumber
              )
            }
          />
          <AppValidationError>
            {formik.touched.creditCardNumber && formik.errors.creditCardNumber}
          </AppValidationError>
        </AppFormGroup>
        <AppFormGroup>
          <AppLabel htmlFor="credit-card-expires">Expires</AppLabel>
          <AppInput
            type="date"
            id="credit-card-expires"
            name="creditCardExpires"
            value={formik.values.creditCardExpires}
            onChange={formik.handleChange}
            valid={
              !(
                formik.touched.creditCardExpires &&
                formik.errors.creditCardExpires
              )
            }
          />
          <AppValidationError>
            {formik.touched.creditCardExpires &&
              formik.errors.creditCardExpires}
          </AppValidationError>
        </AppFormGroup>
        <AppFormGroup>
          <AppLabel htmlFor="credit-card-security-code">Security code</AppLabel>
          <AppInput
            id="credit-card-security-code"
            name="creditCardSecurityCode"
            maxLength={3}
            value={formik.values.creditCardSecurityCode}
            onChange={formik.handleChange}
            valid={
              !(
                formik.touched.creditCardSecurityCode &&
                formik.errors.creditCardSecurityCode
              )
            }
          />
          <AppValidationError>
            {formik.touched.creditCardSecurityCode &&
              formik.errors.creditCardSecurityCode}
          </AppValidationError>
        </AppFormGroup>
      </AppForm>
      <ButtonBar>
        <AppPrimaryButton type="submit" form="payment-details-form">
          <PaddedButtonText>Next</PaddedButtonText>
          <Volume2 color="white" size="1.25rem" />
        </AppPrimaryButton>
        <AppMutedButton onClick={onBack}>Back</AppMutedButton>
      </ButtonBar>
    </WizardStep>
  )
}
