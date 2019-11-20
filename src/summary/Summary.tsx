import React from 'react'

import { TCollector } from '../useCollector'
import { AppH2 } from '../layout/AppHeadings'
import { AppHr } from '../layout/AppHr'
import { TPrice } from '../usePrice'
import styled from 'styled-components'
import { SubscriptionSummary } from './SubscriptionSummary'
import { UserSummary } from './UserSummary'
import { PaymentDetailsSummary } from './PaymentDetailsSummary'

type TProps = {
  price: TPrice
  collector: TCollector
}

export default ({ price, collector }: TProps) => {
  return (
    <React.Fragment>
      <AppHr />
      <AppH2>Order summary</AppH2>
      <SummarySections>
        <SubscriptionSummary data={price.value} />
        {collector.value.data.userDetails && (
          <UserSummary data={collector.value.data.userDetails} />
        )}
        {collector.value.data.paymentDetails && (
          <PaymentDetailsSummary data={collector.value.data.paymentDetails} />
        )}
      </SummarySections>
    </React.Fragment>
  )
}

export const SummarySections = styled.div`
  overflow-wrap: break-word;

  > * + * {
    margin-top: 0.5rem;
  }
`

export const SummarySection = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const SummarySectionKey = styled.div`
  grid-column: 1;
  font-weight: bold;
`

export const SummarySectionValue = styled.div`
  grid-column: 2 / span 2;
`

export const Muted = styled.span`
  color: #666;
`
