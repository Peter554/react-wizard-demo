import React from 'react'
import { UseFormik } from 'formik'
import { Volume2 } from 'react-feather'

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
import { TPaymentDetailsData } from './formiks'

type TProps = {
  visible: boolean
  formik: UseFormik<TPaymentDetailsData>
  onBack: () => void
}

export default ({ visible, formik, onBack }: TProps) => {
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
            placeholder="YYYY-MM-DD"
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
