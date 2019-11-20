import styled from 'styled-components'

export const AppDownload = styled.button`
  display: inline;
  background-color: transparent;
  padding: 0;
  border: 0;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: ${props => props.theme.colors.primaryFocus};
  }
`
