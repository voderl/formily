<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script>
import { createForm } from '@voderl-formily/core'
import { createSchemaField } from '@voderl-formily/vue'
import { Form, FormItem, Switch, Submit } from '@voderl-formily/element'

const schema = {
  type: 'object',
  properties: {
    switch: {
      type: 'boolean',
      title: '开关',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Switch,
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
