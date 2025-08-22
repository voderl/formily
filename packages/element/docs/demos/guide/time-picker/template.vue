<template>
  <FormProvider :form="form">
    <Field
      name="time"
      title="时间"
      required
      :decorator="[FormItem]"
      :component="[
        TimePicker,
        {
          style: {
            width: '240px',
          },
        },
      ]"
    />
    <Field
      name="[startTime,endTime]"
      title="时间范围"
      :decorator="[FormItem]"
      :component="[
        TimePicker,
        {
          isRange: true,
          style: {
            width: '240px',
          },
        },
      ]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@voderl-formily/core'
import { FormProvider, Field } from '@voderl-formily/vue'
import { FormItem, TimePicker, Submit } from '@voderl-formily/element'

const form = createForm()

export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      FormItem,
      TimePicker,
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
