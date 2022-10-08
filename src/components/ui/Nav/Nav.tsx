import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

interface LinkProps {
  name: string
  href: string
}

interface Props {
  className?: string
}

const Nav = component$(({ className }: Props) => {
  const { pathname } = useLocation()

  const Link = component$(({ href, name }: LinkProps) => (
    <a
      class={`font-bold ${pathname === href && 'text-maroon'} link-hover`}
      href={href}
    >
      {name}
    </a>
  ))

  return (
    <nav
      class={`w-full bg-crust mb-10 shadow-xl mx-auto rounded-sm ${className}`}
    >
      <div class="container gap-7 justify-center p-2 md:p-0 flex items-center h-[66px]">
        <Link name="Heim" href="/" />
        <Link name="Portfolio" href="/portfolio" />
      </div>
    </nav>
  )
})

export default Nav
