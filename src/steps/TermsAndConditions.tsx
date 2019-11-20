import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { termsAndConditionsFormSchema } from './formSchema'
import { WizardStep } from '../layout/WizardStep'
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
import { AppCheckbox, AppCheckboxContainer } from '../layout/AppCheckbox'
import { AppDownload } from '../layout/AppDownload'
import { Volume2 } from 'react-feather'

export type TTermsAndConditionsData = yup.InferType<
  typeof termsAndConditionsFormSchema
>

type TProps = {
  onSubmit: (data: TTermsAndConditionsData) => void
  onBack: () => void
  visible: boolean
}

export default ({ onSubmit, onBack, visible }: TProps) => {
  const formik = useFormik<TTermsAndConditionsData>({
    initialValues: {
      acceptedTerms: false,
    },
    validationSchema: termsAndConditionsFormSchema,
    onSubmit: data => {
      data = termsAndConditionsFormSchema.cast(data)
      onSubmit(data)
    },
  })

  return (
    <WizardStep visible={visible}>
      <AppH2>Terms and conditions</AppH2>
      <p>
        Before continuing make sure you've looked over our terms and conditions.
        You can download a copy <AppDownload>here</AppDownload>.
      </p>

      <AppForm id="terms-form" onSubmit={formik.handleSubmit}>
        <AppFormGroup>
          <AppCheckboxContainer>
            <AppCheckbox
              id="terms-accepted"
              name="acceptedTerms"
              value={formik.values.acceptedTerms as any}
              onChange={formik.handleChange}
              valid={
                !(formik.touched.acceptedTerms && formik.errors.acceptedTerms)
              }
            />
            <AppLabel htmlFor="terms-accepted">Accept terms?</AppLabel>
          </AppCheckboxContainer>
          <AppValidationError>
            {formik.touched.acceptedTerms && formik.errors.acceptedTerms}
          </AppValidationError>
        </AppFormGroup>
      </AppForm>
      <ButtonBar>
        <AppPrimaryButton type="submit" form="terms-form">
          <PaddedButtonText>Submit!</PaddedButtonText>
          <Volume2 color="white" size="1.25rem" />
        </AppPrimaryButton>
        <AppMutedButton onClick={onBack}>Back</AppMutedButton>
      </ButtonBar>
    </WizardStep>
  )
}
