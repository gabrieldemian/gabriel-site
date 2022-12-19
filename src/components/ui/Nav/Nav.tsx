import { component$ } from '@builder.io/qwik'
import { useLocation, Link } from '@builder.io/qwik-city'

interface Props {
  className?: string
}

export const items = [
  { name: 'About', href: '/' },
  { name: 'Portfolio', href: '/portfolio' }
]

const Nav = component$(({ className }: Props) => {
  const { pathname } = useLocation()

  return (
    <nav
      class={`w-full bg-crust mb-10 shadow-xl mx-auto rounded-sm ${className}`}
    >
      <div class="container gap-7 justify-center p-2 md:p-0 flex items-center h-[66px]">
        {items.map(({ name, href }) => (
          <Link
            key={name}
            class={{
              'font-bold link-hover': true,
              'text-maroon': pathname === href
            }}
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
})

export default Nav
