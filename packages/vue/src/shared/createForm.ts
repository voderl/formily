import { createForm } from '@voderl-formily/core'
import { markRaw } from 'vue-demi'

const createRawForm = (...args: Parameters<typeof createForm>) => {
  const form = createForm(...args)
  return markRaw(form)
}

export { createRawForm as createForm }
