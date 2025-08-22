<template>
  <FormProvider :form="form">
    <Field name="input" :component="[Input, { placeholder: '请输入' }]" />
  </FormProvider>
</template>

<script>
import { Input } from 'ant-design-vue'
import { createForm } from '@voderl-formily/core'
import { FormProvider, Field } from '@voderl-formily/vue'
import 'ant-design-vue/dist/antd.css'

export default {
  components: { FormProvider, Field },
  data() {
    return {
      Input,
      form: createForm(),
    }
  },
}
</script>
