import React from 'react'
import { format } from 'date-fns'

import {
  SummarySection,
  SummarySectionKey,
  SummarySectionValue,
  Muted,
} from './Summary'
import { TPaymentDetailsData } from '../steps/formiks'

export const PaymentDetailsSummary = ({
  data,
}: {
  data: TPaymentDetailsData
}) => {
  const cardEnds = data.creditCardNumber.slice(-4)
  const formattedExpiry = !!data.creditCardExpires
    ? format(new Date(data.creditCardExpires), 'do MMM yyyy')
    : ''

  return (
    <SummarySection>
      <SummarySectionKey>Payment:</SummarySectionKey>
      <SummarySectionValue>
        <div>Card ending {cardEnds}</div>
        <div>
          <Muted>
            Expiring {formattedExpiry} with security code{' '}
            {data.creditCardSecurityCode}
          </Muted>
        </div>
      </SummarySectionValue>
    </SummarySection>
  )
}
