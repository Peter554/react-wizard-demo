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
  PaddedButtonText,
} from '../layout/Buttons'
import { AppSelect } from '../layout/AppSelect'
import { TSubscriptionOptionsData } from './formiks'
import { AppCustomCheckbox } from '../layout/AppCustomCheckbox'

type TProps = {
  visible: boolean
  formik: UseFormik<TSubscriptionOptionsData>
}

export default ({ visible, formik }: TProps) => {
  return (
    <WizardStep visible={visible}>
      <AppH2>Subscription options</AppH2>
      <AppForm id="subscription-options-form" onSubmit={formik.handleSubmit}>
        <AppFormGroup>
          <AppLabel htmlFor="duration">Duration</AppLabel>
          <AppSelect
            id="duration"
            name="durationMonths"
            value={formik.values.durationMonths}
            onChange={formik.handleChange}
            valid={
              !(formik.touched.durationMonths && formik.errors.durationMonths)
            }
          >
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
          </AppSelect>
          <AppValidationError>
            {formik.touched.durationMonths && formik.errors.durationMonths}
          </AppValidationError>
        </AppFormGroup>
        <AppFormGroup>
          <AppLabel htmlFor="amount">How much?</AppLabel>
          <AppSelect
            id="amount"
            name="amountGB"
            value={formik.values.amountGB}
            onChange={formik.handleChange}
            valid={!(formik.touched.amountGB && formik.errors.amountGB)}
          >
            <option value="3">3 GB</option>
            <option value="5">5 GB</option>
            <option value="10">10 GB</option>
            <option value="20">20 GB</option>
            <option value="30">30 GB</option>
            <option value="50">50 GB</option>
          </AppSelect>
          <AppValidationError>
            {formik.touched.amountGB && formik.errors.amountGB}
          </AppValidationError>
        </AppFormGroup>
        <AppFormGroup>
          <AppCustomCheckbox
            id="pay-upfront"
            name="payUpfront"
            formik={formik}
            label="Upfront payment?"
          />
          <AppValidationError>
            {formik.touched.payUpfront && formik.errors.payUpfront}
          </AppValidationError>
        </AppFormGroup>
      </AppForm>
      <ButtonBar>
        <AppPrimaryButton type="submit" form="subscription-options-form">
          <PaddedButtonText>Next</PaddedButtonText>
          <Volume2 color="white" size="1.25rem" />
        </AppPrimaryButton>
      </ButtonBar>
    </WizardStep>
  )
}
