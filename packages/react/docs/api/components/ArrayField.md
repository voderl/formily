---
order: 1
---

# ArrayField

## Description

As @formily/core's [createArrayField](https://core.formilyjs.org/api/models/form#createarrayfield) React implementation, it is a bridge component specifically used to bind ViewModel and input controls, ArrayField component Property reference [IFieldFactoryProps](https://core.formilyjs.org/api/models/form#ifieldfactoryprops)

<Alert>
When we use the ArrayField component, we must remember to pass the name attribute. At the same time, use render props to organize sub-components
</Alert>

## Signature

```ts
type ArrayField = React.FC<React.PropsWithChildren<IFieldFactoryProps>>
```

## Custom component use case

```tsx
import React from 'react'
import { createForm, ArrayField as ArrayFieldType } from '@voderl-formily/core'
import {
  FormProvider,
  Field,
  ArrayField,
  useField,
  observer,
} from '@voderl-formily/react'
import { Input, Button, Space } from 'antd'

const form = createForm()

const ArrayComponent = observer(() => {
  const field = useField<ArrayFieldType>()
  return (
    <>
      <div>
        {field.value?.map((item, index) => (
          <div
            key={field.getIndexKey(index)}
            style={{ display: 'flex-block', marginBottom: 10 }}
          >
            <Space>
              <Field name={index} component={[Input]} />
              <Button
                onClick={() => {
                  field.remove(index)
                }}
              >
                Remove
              </Button>
              <Button
                onClick={() => {
                  field.moveUp(index)
                }}
              >
                Move Up
              </Button>
              <Button
                onClick={() => {
                  field.moveDown(index)
                }}
              >
                Move Down
              </Button>
            </Space>
          </div>
        ))}
      </div>
      <Button
        onClick={() => {
          field.push('')
        }}
      >
        Add
      </Button>
    </>
  )
})

export default () => (
  <FormProvider form={form}>
    <ArrayField name="array" component={[ArrayComponent]} />
  </FormProvider>
)
```

## RenderProps use cases

```tsx
import React from 'react'
import { createForm } from '@voderl-formily/core'
import { FormProvider, Field, ArrayField } from '@voderl-formily/react'
import { Input, Button, Space } from 'antd'

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <ArrayField name="array">
      {(field) => {
        return (
          <>
            <div>
              {field.value?.map((item, index) => (
                <div
                  key={field.getIndexKey(index)}
                  style={{ display: 'flex-block', marginBottom: 10 }}
                >
                  <Space>
                    <Field name={index} component={[Input]} />
                    <Button
                      onClick={() => {
                        field.remove(index)
                      }}
                    >
                      Remove
                    </Button>
                    <Button
                      onClick={() => {
                        field.moveUp(index)
                      }}
                    >
                      Move Up
                    </Button>
                    <Button
                      onClick={() => {
                        field.moveDown(index)
                      }}
                    >
                      Move Down
                    </Button>
                  </Space>
                </div>
              ))}
            </div>
            <Button onClick={() => field.push('')}>Add</Button>
          </>
        )
      }}
    </ArrayField>
  </FormProvider>
)
```

```tsx
import React, { useMemo } from 'react'
import { ArrayField as ArrayFieldType, createForm } from '@voderl-formily/core'
import {
  Field,
  useField,
  observer,
  VoidField,
  ArrayField,
  FormProvider,
} from '@voderl-formily/react'
import { Input, Button, Space } from 'antd'

const ItemComponent = observer(() => {
  const currentField = useField()
  console.log('renderItem')
  const arrayField = currentField.parent as ArrayFieldType
  return (
    <div
      style={{
        display: 'flex-block',
        marginBottom: 10,
      }}
    >
      <Space>
        <Field name={`text`} component={[Input]} />
        <VoidField name="_buttons_">
          {(field) => {
            return (
              <>
                <Button
                  onClick={() => {
                    arrayField.remove(field.index)
                  }}
                >
                  Remove
                </Button>
                <Button
                  onClick={() => {
                    arrayField.moveUp(field.index)
                  }}
                >
                  Move Up
                </Button>
                <Button
                  onClick={() => {
                    arrayField.moveDown(field.index)
                  }}
                >
                  Move Down
                </Button>
              </>
            )
          }}
        </VoidField>
      </Space>
    </div>
  )
})

const ArrayComponent = observer(() => {
  const field = useField<ArrayFieldType>()
  return (
    <>
      <div
        style={{
          maxHeight: '200px',
          overflow: 'auto',
        }}
      >
        {field.value?.map((item, index) => {
          return (
            <Field
              key={field.getIndexKey(index)}
              name={index}
              component={[ItemComponent]}
            />
          )
        })}
      </div>

      <Button
        onClick={() => {
          field.push({
            text: '',
          })
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          field.push(
            ...Array(5000)
              .fill('')
              .map((v, index) => ({
                text: (index * 10).toString(),
              }))
          )
        }}
      >
        Add 5000
      </Button>
    </>
  )
})

export default function VoderlFormilyArrayField() {
  const form = useMemo(() => {
    return createForm()
  }, [])
  return (
    <FormProvider form={form}>
      <ArrayField name="array" component={[ArrayComponent]} />
    </FormProvider>
  )
}
```
