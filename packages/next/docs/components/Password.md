# Password

> Password input box

## Markup Schema example

```tsx
import React from 'react'
import {
  Password,
  FormItem,
  FormButtonGroup,
  Submit,
  FormLayout,
} from '@voderl-formily/next'
import { createForm } from '@voderl-formily/core'
import { FormProvider, createSchemaField } from '@voderl-formily/react'

const SchemaField = createSchemaField({
  components: {
    Password,
    FormItem,
  },
})

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <SchemaField>
        <SchemaField.String
          name="input"
          title="input box"
          x-decorator="FormItem"
          x-component="Password"
          required
          x-component-props={{
            checkStrength: true,
          }}
        />
      </SchemaField>
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)
```

## JSON Schema case

```tsx
import React from 'react'
import {
  Password,
  FormItem,
  FormButtonGroup,
  Submit,
  FormLayout,
} from '@voderl-formily/next'
import { createForm } from '@voderl-formily/core'
import { FormProvider, createSchemaField } from '@voderl-formily/react'
const SchemaField = createSchemaField({
  components: {
    Password,
    FormItem,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: 'input box',
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        checkStrength: true,
      },
    },
  },
}

export default () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <SchemaField schema={schema} />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)
```

## Pure JSX case

```tsx
import React from 'react'
import {
  Password,
  FormItem,
  FormButtonGroup,
  Submit,
  FormLayout,
} from '@voderl-formily/next'
import { createForm } from '@voderl-formily/core'
import { FormProvider, Field } from '@voderl-formily/react'
const form = createForm()

export default () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <Field
        name="input"
        title="input box"
        required
        decorator={[FormItem]}
        component={[
          Password,
          {
            checkStrength: true,
          },
        ]}
      />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)
```

## API

Reference https://fusion.design/pc/component/basic/input
