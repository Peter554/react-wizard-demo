import React from 'react'

import {
  SummarySection,
  SummarySectionKey,
  SummarySectionValue,
  Muted,
} from './Summary'
import { TSubscriptionOptionsData } from '../steps/formiks'

export const SubscriptionSummary = ({
  data,
}: {
  data: TSubscriptionOptionsData
}) => {
  const basicPrice = 2 * data.amountGB * data.durationMonths
  const total = data.payUpfront ? 0.9 * basicPrice : basicPrice

  return (
    <SummarySection>
      <SummarySectionKey>Price: </SummarySectionKey>
      <SummarySectionValue>
        <div>${total}</div>
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
