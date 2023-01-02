import { Slot, component$ } from '@builder.io/qwik'

interface Props {
  className?: string
}

const Button = component$(({ className }: Props) => {
  return (
    <button
      class={`px-4 py-2 bg-maroon rounded-md text-mantle font-bold hover:bg-opacity-70 duration-300 ${className}`}
    >
      <Slot />
    </button>
  )
})

export default Button
