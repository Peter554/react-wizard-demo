import React from 'react'

import {
  SummarySection,
  SummarySectionKey,
  SummarySectionValue,
  Muted,
} from './Summary'

import { TPriceValue } from '../usePrice'

export const SubscriptionSummary = ({ data }: { data: TPriceValue }) => {
  return (
    <SummarySection>
      <SummarySectionKey>Price: </SummarySectionKey>
      <SummarySectionValue>
        <div>${data.total}</div>
        <div>
          <Muted>
            {' '}
            {data.amountGB}GB for {data.durationMonths} months @ $2 / GB /
            month,{' '}
            {data.payUpfront ? (
              <span>10% upfront payment discount applied</span>
            ) : (
              <span>to be paid later</span>
            )}
            
          </Muted>
        </div>
      </SummarySectionValue>
    </SummarySection>
  )
}
