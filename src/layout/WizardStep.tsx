import React from 'react'
import styled from 'styled-components'

type TProps = {
  visible: boolean
  children: JSX.Element | JSX.Element[]
}

const Div = styled.div<{ visible: boolean }>`
  display: ${props => (props.visible ? 'block' : 'none')};

  > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 500px) {
    > * + * {
      margin-top: 3rem;
    }
  }
`

export const WizardStep = ({ visible, children }: TProps) => {
  return <Div visible={visible}>{children}</Div>
}
