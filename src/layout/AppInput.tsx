import styled, { css } from 'styled-components'

export const appInputCss = css<{ valid: boolean }>`
  display: block;
  width: 100%;
  height: 2rem;
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid
    ${props =>
      props.valid ? props.theme.colors.inputBorder : props.theme.colors.error};

  transition: border-color 200ms ease-in;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-color: ${props =>
      props.valid
        ? props.theme.colors.inputBorderFocus
        : props.theme.colors.error};
  }
`

export const AppInput = styled.input<{ valid: boolean }>`
  ${appInputCss}
`
