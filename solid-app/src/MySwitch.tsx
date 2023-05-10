import { createSignal } from 'solid-js'
import { Switch } from '@headlessui/react'
import { tw } from 'twind'

export default function MySwitch() {
  const [enabled, setEnabled] = createSignal(false)

  return (
    <Switch.Group>
      <div class={tw`flex items-center`}>
        <Switch.Label class={tw`mr-4`}>Enable notifications</Switch.Label>
        <Switch
          checked={enabled()}
          onChange={setEnabled}
          class={tw`${
            enabled() ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            class={tw`${
              enabled() ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}