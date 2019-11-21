import React from 'react'
import { UseFormik } from 'formik'
import styled from 'styled-components'

import { TStep } from '../useStep'
import {
  TSubscriptionOptionsData,
  TUserDetailsData,
  TPaymentDetailsData,
} from '../steps/formiks'
import { AppH2 } from '../layout/AppHeadings'
import { AppHr } from '../layout/AppHr'
import { SubscriptionSummary } from './SubscriptionSummary'
import { UserSummary } from './UserSummary'
import { PaymentDetailsSummary } from './PaymentDetailsSummary'

type TProps = {
  step: TStep
  subscriptionOptionsFormik: UseFormik<TSubscriptionOptionsData>
  userDetailsFormik: UseFormik<TUserDetailsData>
  paymentDetailsFormik: UseFormik<TPaymentDetailsData>
}

export default ({
  step,
  subscriptionOptionsFormik,
  userDetailsFormik,
  paymentDetailsFormik,
}: TProps) => {
  return (
    <React.Fragment>
      <AppHr />
      <AppH2>Order summary</AppH2>
      <SummarySections>
        <SubscriptionSummary data={subscriptionOptionsFormik.values} />
        {step.value > 2 && <UserSummary data={userDetailsFormik.values} />}
        {step.value > 3 && (
          <PaymentDetailsSummary data={paymentDetailsFormik.values} />
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
