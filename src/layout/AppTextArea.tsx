import styled from 'styled-components'

export const AppTextArea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  line-height: 2rem;
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.inputBorder};

  transition: border-color 200ms ease-in;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-color: ${props => props.theme.colors.inputBorderFocus};
  }
`
