<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField
        name="select"
        title="选择框"
        x-decorator="FormItem"
        x-component="Select"
        :x-component-props="{
          style: {
            width: '240px',
          },
        }"
        :enum="[
          {
            label: '选项1',
            value: 1,
          },
          {
            label: '选项2',
            value: 2,
          },
        ]"
      />
    </SchemaField>
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@voderl-formily/core'
import { createSchemaField, FormProvider } from '@voderl-formily/vue'
import { FormItem, Select, Submit } from '@voderl-formily/element'

const form = createForm()
const fields = createSchemaField({
  components: {
    FormItem,
    Select,
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
