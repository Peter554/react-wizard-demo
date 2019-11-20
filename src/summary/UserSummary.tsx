import React from 'react'

import {
  SummarySection,
  SummarySectionKey,
  SummarySectionValue,
  Muted,
} from './Summary'

import { TUserDetailsData } from '../steps/UserDetails'

export const UserSummary = ({ data }: { data: TUserDetailsData }) => {
  return (
    <SummarySection>
      <SummarySectionKey>You:</SummarySectionKey>
      <SummarySectionValue>
        <div>
          {data.firstName} {data.lastName}
        </div>
        <div>
          <Muted>{data.emailAddress}</Muted>
        </div>
      </SummarySectionValue>
    </SummarySection>
  )
}
