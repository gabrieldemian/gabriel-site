import { component$, useTask$ } from '@builder.io/qwik'
import { DocumentHead, Link } from '@builder.io/qwik-city'

import { Button } from '~/components/ui'

export const socials = [
  { name: 'Github', href: 'github.com/gabrieldemian' },
  { name: 'Linkedin', href: 'linkedin.com/in/xgcr13/' },
  { name: 'Twitter', href: 'twitter.com/gabdem13' },
]

export default component$(() => {
  console.log('being re-renderd')

  useTask$(({ track }) => {
    console.log('component mounted')
  })

  return (
    <article class="container">
      <div class="mb-5 w-full block">
        <pre>
          {`
 _____________________________________
/ Welcome, stranger. I will guide you \\
\\ through this website.               /
 -------------------------------------
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
        I am a frontend specialist, but I also have experience in backend, Rust,
        and blockchain smart contracts.
      </p>
      <p>
        I have over 6 years of professional experience, having worked for
        companies and projects from around the globe.
      </p>
      <p>
        My native language is Portuguese, and I am proficient in English (C1
        level) and have a basic knowledge of German (A1 level).
      </p>
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
  title: 'Gabriel Ribeiro',
}
