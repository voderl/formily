import { unstable_useCompatFactory } from '@voderl-formily/reactive-react'
import { Form } from '@voderl-formily/core'
import { uid } from '@voderl-formily/shared'
import { useForm } from './useForm'

export const useFormEffects = (effects?: (form: Form) => void) => {
  const form = useForm()
  unstable_useCompatFactory(() => {
    const id = uid()
    form.addEffects(id, effects)
    return {
      dispose() {
        form.removeEffects(id)
      },
    }
  })
}
