import { Switch as NextSwitch } from '@alifd/next'
import { connect, mapProps } from '@voderl-formily/react'
import { mapSize, mapStatus } from '../__builtins__'
export const Switch = connect(
  NextSwitch,
  mapProps(
    {
      value: 'checked',
    },
    mapSize,
    mapStatus
  )
)

export default Switch
