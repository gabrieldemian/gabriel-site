import { component$ } from '@builder.io/qwik'
import { DocumentHead, Link } from '@builder.io/qwik-city'
import { Button } from '~/components/ui'

export const socials = [
  { name: 'Github', href: 'github.com/gabrieldemian' },
  { name: 'Linkedin', href: 'github.com/gabrieldemian' },
  { name: 'Twitter', href: 'github.com/gabrieldemian' }
]

export default component$(() => {
  return (
    <article class="container">
      <div class="mb-5 w-full block">
        <pre>
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
      <p className="text-flamingo">Frontend engineer/developer</p>
      <p>
        I'm a frontend specialist, but I also have experience in backend,
        and Rust. You could say my skills diagram is "F
        shaped".
      </p>
      <p>
        I have more than 6 years of professional experience. I had worked for
        companies and projects from all over the world.
      </p>
      <p>My native language is Portuguese, I'm fluent in English, and I have basic understanding of German.</p>
      <Link href="/portfolio">
        <Button className="w-full md:w-[auto]">My Portfolio</Button>
      </Link>
      <h4 className="mt-10">Follow me</h4>
      {socials.map(({ name, href }) => (
        <p className="mb-1">
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
