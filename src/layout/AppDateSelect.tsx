import React from 'react'
import styled from 'styled-components'
import { UseFormik } from 'formik'
import Cleave from 'cleave.js/react'

import { appInputCss } from './AppInput'

const AppCleave = styled(Cleave)`
  ${appInputCss}
`

export const AppDateSelect = ({
  id,
  name,
  formik,
}: {
  id: string
  name: string
  formik: UseFormik<any>
}) => {
  return (
    <AppCleave
      id={id}
      name={name}
      placeholder="YYYY-MM-DD"
      options={{ date: true, datePattern: ['Y', 'm', 'd'], delimiter: '-' }}
      onChange={formik.handleChange}
      valid={!(formik.touched[name] && formik.errors[name])}
    />
  )
}
