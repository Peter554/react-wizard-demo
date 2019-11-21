import React from 'react'
import styled from 'styled-components'
import { UseFormik } from 'formik'
import { Check } from 'react-feather'

const CheckMark = styled(Check)`
  color: #fff;
  display: block;
`

export const AppCustomCheckbox = ({
  id,
  name,
  formik,
  label,
}: {
  id: string
  name: string
  formik: UseFormik<any>
  label: string
}) => {
  const checked = formik.values[name]
  // const error = formik.touched[name] && formik.errors[name]

  return (
    <Label>
      <Checkbox
        id={id}
        name={name}
        value={checked}
        onChange={formik.handleChange}
      />
      <Dummy checked={checked}>{checked && <CheckMark size={14} />}</Dummy>
      {label}
    </Label>
  )
}

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 2rem;
  color: ${props => props.theme.colors.label};

  &:hover {
    cursor: pointer;
  }
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  // See https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  argin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  whitespace: nowrap;
  width: 1px;
`

const Dummy = styled.div<{ checked: boolean }>`
  width: 1.125rem;
  height: 1.125rem;
  border: 2px solid grey;
  margin-right: 1rem;

  background-color: ${props =>
    props.checked ? props.theme.colors.primary : '#fff'}

  transition: all 200ms ease-in;

  ${Checkbox}:focus + & {
    border-color: black;
  }
`
