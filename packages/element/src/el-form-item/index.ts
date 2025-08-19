import { isVoidField } from '@voderl-formily/core'
import { connect, mapProps } from '@voderl-formily/vue'

import type { FormItem as _ElFormItemProps } from 'element-ui'
import { FormItem as ElFormItemComponent } from 'element-ui'

export type ElFormItemProps = _ElFormItemProps & { title: string }

export const ElFormItem = connect(
  ElFormItemComponent,
  mapProps({ title: 'label', required: true }, (props, field) => ({
    error: !isVoidField(field)
      ? field.errors.length
        ? field.errors.join('，')
        : undefined
      : undefined,
  }))
)

export default ElFormItem
