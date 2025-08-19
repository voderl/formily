import React, { Fragment } from 'react'
import { isFn } from '@voderl-formily/shared'
import { observer } from '@voderl-formily/reactive-react'
import { useForm } from '../hooks'
import { IFormSpyProps, ReactFC } from '../types'

export const FormConsumer: ReactFC<IFormSpyProps> = observer((props) => {
  const children = isFn(props.children) ? props.children(useForm()) : null
  return <Fragment>{children}</Fragment>
})

FormConsumer.displayName = 'FormConsumer'
