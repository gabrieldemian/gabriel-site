import { component$ } from '@builder.io/qwik'

const Nav = component$(() => {
  return (
    <nav className="w-full bg-crust mb-10 shadow-xl">
      <div className="container max-w-[80ch] p-2 md:p-0 flex items-center h-[66px]">
        <small>navbar is here</small>
      </div>
    </nav>
  )
})

export default Nav
