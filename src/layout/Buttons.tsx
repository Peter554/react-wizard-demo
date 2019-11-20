import styled from 'styled-components'

export const ButtonBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const AppButton = styled.button<{ order?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 45%;
  order: ${props => props.order || 1};
  border: 1px solid transparent;
  border-radius: 0;
  padding: 3px 1rem;

  transition: background-color 200ms ease-in;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`

export const AppPrimaryButton = styled(AppButton)`
  color: #fff;
  background-color: ${props => props.theme.colors.primary};

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.primaryFocus};
  }
`

export const AppMutedButton = styled(AppButton)`
  color: #fff;
  background-color: ${props => props.theme.colors.mutedPrimary};

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.mutedPrimaryFocus};
  }
`

export const PaddedButtonText = styled.span`
  padding-right: 0.75rem;
`
