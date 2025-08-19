import { useContext } from 'react'
import { SchemaContext } from '../shared'
import { Schema } from '@voderl-formily/json-schema'

export const useFieldSchema = (): Schema => {
  return useContext(SchemaContext)
}
