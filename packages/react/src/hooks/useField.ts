import { useContext } from 'react'
import { GeneralField } from '@voderl-formily/core'
import { FieldContext } from '../shared'

export const useField = <T = GeneralField>(): T => {
  return useContext(FieldContext) as any
}
