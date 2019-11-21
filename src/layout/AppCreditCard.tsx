import React from 'react'
import styled from 'styled-components'
import { UseFormik } from 'formik'
import Cleave from 'cleave.js/react'

import { appInputCss } from './AppInput'
import { ChangeEvent } from 'cleave.js/react/props'

const AppCleave = styled(Cleave)`
  ${appInputCss}
`

export const AppCreditCard = ({
  id,
  name,
  formik,
}: {
  id: string
  name: string
  formik: UseFormik<any>
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const trueValue = e.target.rawValue
    formik.handleChange({ ...e, target: { ...e, value: trueValue, name } })
  }

  return (
    <AppCleave
      id={id}
      name={name}
      options={{ creditCard: true, delimiter: '-' }}
      onChange={onChange}
      valid={!(formik.touched[name] && formik.errors[name])}
    />
  )
}
