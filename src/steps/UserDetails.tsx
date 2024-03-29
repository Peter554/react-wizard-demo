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
import { AppTextArea } from '../layout/AppTextArea'
import { TUserDetailsData } from './formiks'

type TProps = {
  visible: boolean
  formik: UseFormik<TUserDetailsData>
  onBack: () => void
}

export default ({ visible, formik, onBack }: TProps) => {
  return (
    <WizardStep visible={visible}>
      <AppH2>Your details</AppH2>
      <AppForm id="user-details-form" onSubmit={formik.handleSubmit}>
        <AppFormGroup>
          <AppLabel htmlFor="first-name">First name</AppLabel>
          <AppInput
            id="first-name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            valid={!(formik.touched.firstName && formik.errors.firstName)}
          />
          <AppValidationError>
            {formik.touched.firstName && formik.errors.firstName}
          </AppValidationError>
        </AppFormGroup>
        <AppFormGroup>
          <AppLabel htmlFor="last-name">Last name</AppLabel>
          <AppInput
            id="last-name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            valid={!(formik.touched.lastName && formik.errors.lastName)}
          />
          <AppValidationError>
            {formik.touched.lastName && formik.errors.lastName}
          </AppValidationError>
        </AppFormGroup>
        <AppFormGroup>
          <AppLabel htmlFor="email-address">Email address</AppLabel>
          <AppInput
            id="email-address"
            name="emailAddress"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            valid={!(formik.touched.emailAddress && formik.errors.emailAddress)}
          />
          <AppValidationError>
            {formik.touched.emailAddress && formik.errors.emailAddress}
          </AppValidationError>
        </AppFormGroup>
        <AppFormGroup>
          <AppLabel htmlFor="street-address">Street address</AppLabel>
          <AppTextArea
            id="street-address"
            name="streetAddress"
            value={formik.values.streetAddress}
            onChange={formik.handleChange}
            rows={4}
          ></AppTextArea>
          <AppValidationError>
            {formik.touched.streetAddress && formik.errors.streetAddress}
          </AppValidationError>
        </AppFormGroup>
      </AppForm>
      <ButtonBar>
        <AppPrimaryButton type="submit" form="user-details-form">
          <PaddedButtonText>Next</PaddedButtonText>
          <Volume2 color="white" size={20} />
        </AppPrimaryButton>
        <AppMutedButton onClick={onBack}>Back</AppMutedButton>
      </ButtonBar>
    </WizardStep>
  )
}
