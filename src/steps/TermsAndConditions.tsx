import React from 'react'
import { UseFormik } from 'formik'
import { Volume2 } from 'react-feather'

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
import { AppDownload } from '../layout/AppDownload'
import { TTermsAndConditionsData } from './formiks'
import { AppCustomCheckbox } from '../layout/AppCustomCheckbox'

type TProps = {
  visible: boolean
  formik: UseFormik<TTermsAndConditionsData>
  onBack: () => void
}

export default ({ visible, formik, onBack }: TProps) => {
  return (
    <WizardStep visible={visible}>
      <AppH2>Terms and conditions</AppH2>
      <p>
        Before continuing make sure you've looked over our terms and conditions.
        You can download a copy <AppDownload>here</AppDownload>.
      </p>

      <AppForm id="terms-form" onSubmit={formik.handleSubmit}>
        <AppFormGroup>
          <AppCustomCheckbox
            id="terms-accepted"
            name="acceptedTerms"
            formik={formik}
            label="Accept terms?"
          />
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
