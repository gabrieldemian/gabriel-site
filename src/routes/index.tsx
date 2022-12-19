import { component$, useTask$, useStore } from '@builder.io/qwik'
import { DocumentHead, Link } from '@builder.io/qwik-city'
import { Button } from '~/components/ui'

export const socials = [
  { name: 'Github', href: 'github.com/gabrieldemian' },
  { name: 'Linkedin', href: 'github.com/gabrieldemian' },
  { name: 'Twitter', href: 'github.com/gabrieldemian' }
]

export default component$(() => {
  const a = useStore({a: 0})
  console.log('being re-renderd')

  useTask$(({ track }) => {
    track(() => a.a)
    console.log('component mounted')
  })

  return (
    <article class="container">
      <div class="mb-5 w-full block">
        <pre onClick$={() => a.a+= 1}>
            {`
   _______________________________________
  / Welcome! Check my portfolio to see my \\
  \\ bestest work                          /
   ---------------------------------------
                      \\   ^__^
                       \\  (oo)\\_______
                          (__)\\       )\\/\\
                              ||----w |
                              ||     ||
            `}
        </pre>
      </div>
      <h3 class="font-bold mb-0">Gabriel Ribeiro</h3>
      <p class="text-flamingo">Frontend engineer/developer</p>
      <p>
        I'm a frontend specialist, but I also have experience in backend, Rust, and blockchains smart-contracts.
      </p>
      <p>
        I have more than 6 years of professional experience. I had worked for
        companies and projects from all over the world.
      </p>
      <p>My mother language is Portuguese, I'm C1 in English, and A1 in German.</p>
      <Link href="/portfolio">
        <Button className="w-full md:w-[auto]">My Portfolio</Button>
      </Link>
      <h4 class="mt-10">Follow me</h4>
      {socials.map(({ name, href }) => (
        <p class="mb-1">
          <a href={`https://${href}`} class="link-hover" target="_blank">
            {name}
          </a>
        </p>
      ))}
    </article>
  )
})

export const head: DocumentHead = {
  title: 'Gabriel Ribeiro'
}
