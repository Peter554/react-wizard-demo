import { useState } from 'react'

export type TStep = {
  value: number
  nextStep: () => void
  previousStep: () => void
}

export default (): TStep => {
  const [value, setValue] = useState(1)

  const nextStep = () => {
    setValue(Math.min(value + 1, 4))
  }

  const previousStep = () => {
    setValue(Math.max(value - 1, 1))
  }

  return { value, nextStep, previousStep }
}
