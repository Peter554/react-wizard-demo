import React from 'react'
import styled from 'styled-components'

const Checkbox = styled.input`
  display: block;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active,
  &:hover {
    outline: 1px solid black;
  }
`

export const AppCheckbox = (props: any) => {
  return <Checkbox type="checkbox" {...props} />
}

export const AppCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
