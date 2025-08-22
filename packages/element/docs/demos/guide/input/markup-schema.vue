<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="输入框"
        x-decorator="FormItem"
        x-component="Input"
      />
      <SchemaStringField
        name="textarea"
        title="文本框"
        x-decorator="FormItem"
        x-component="Input.TextArea"
      />
    </SchemaField>
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@voderl-formily/core'
import { createSchemaField, FormProvider } from '@voderl-formily/vue'
import { FormItem, Input, Submit } from '@voderl-formily/element'

const form = createForm()
const fields = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export default {
  components: { FormProvider, ...fields, Submit },
  data() {
    return {
      form,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
