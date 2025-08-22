<template>
  <FormProvider :form="form">
    <ObjectField name="object">
      <Custom></Custom>
    </ObjectField>
    <Custom></Custom>
    <VoidField name="void">
      <Custom></Custom>
    </VoidField>
  </FormProvider>
</template>

<script>
import { defineComponent, h } from '@vue/composition-api'
import { createForm } from '@voderl-formily/core'
import {
  FormProvider,
  ObjectField,
  VoidField,
  useParentForm,
} from '@voderl-formily/vue'
import { observer } from '@voderl-formily/reactive-vue'

const Custom = observer(
  defineComponent({
    setup() {
      const formRef = useParentForm()
      return () => {
        const form = formRef.value
        return h('div', {}, [form.displayName])
      }
    },
  })
)

export default {
  components: {
    FormProvider,
    ObjectField,
    VoidField,
    VoidField,
    Custom,
  },
  data() {
    const form = createForm()
    return {
      form,
    }
  },
}
</script>
