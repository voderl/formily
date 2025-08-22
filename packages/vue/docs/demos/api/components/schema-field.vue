<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField name="input" x-component="Input" />
    </SchemaField>
  </FormProvider>
</template>

<script>
import { Input } from 'ant-design-vue'
import { createForm } from '@voderl-formily/core'
import { FormProvider, createSchemaField } from '@voderl-formily/vue'
import 'ant-design-vue/dist/antd.css'

const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    Input,
  },
})

export default {
  components: { FormProvider, SchemaField, SchemaStringField },
  data() {
    return {
      form: createForm(),
    }
  },
}
</script>
