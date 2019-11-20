import { useState } from 'react'
import { TSubscriptionOptionsData } from './steps/SubscriptionOptions'

export type TPriceValue = {
  durationMonths: number
  amountGB: number
  payUpfront: boolean
  total: number
}

export type TPrice = {
  value: TPriceValue
  updatePrice: (options: TSubscriptionOptionsData) => void
}

export const usePrice = (): TPrice => {
  const [value, setValue] = useState<TPriceValue>({
    durationMonths: 12,
    amountGB: 5,
    payUpfront: false,
    total: 120,
  })

  const updatePrice = (options: TSubscriptionOptionsData) => {
    const basicPrice = 2 * options.amountGB * options.durationMonths
    const total = options.payUpfront ? 0.9 * basicPrice : basicPrice

    setValue({
      durationMonths: options.durationMonths,
      amountGB: options.amountGB,
      payUpfront: options.payUpfront,
      total,
    })
  }

  return { value, updatePrice }
}
