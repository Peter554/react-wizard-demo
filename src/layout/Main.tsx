import React from 'react'
import styled from 'styled-components'

type TProps = { children: JSX.Element | JSX.Element[] }

export default ({ children }: TProps) => {
  return (
    <Main>
      <Div>{children}</Div>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  margin: 2rem 0;
  width: 900px;
  max-width: 90%;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;

  > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 500px) {
    padding: 3rem;

    > * + * {
      margin-top: 3rem;
    }
  }
`
