<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script>
import { createForm } from '@voderl-formily/core'
import { createSchemaField } from '@voderl-formily/vue'
import { Form, FormItem, Password, Submit } from '@voderl-formily/element'

const schema = {
  type: 'object',
  properties: {
    password: {
      type: 'string',
      title: '密码框',
      'x-decorator': 'FormItem',
      'x-component': 'Password',
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Password,
  },
})

export default {
  components: { Form, SchemaField, Submit },
  data() {
    return {
      form,
      schema,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>
