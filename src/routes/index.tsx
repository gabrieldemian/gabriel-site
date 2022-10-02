import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Button } from '~/components/ui'

export default component$(() => {
  return (
    <article class="container">
      <div class="h-80 bg-flamingo mb-5 w-full" />
      <h4 class="font-bold mb-0">Gabriel Ribeiro</h4>
      <p>Frontend engineer/developer</p>
      <h5>Work</h5>
      <p>
        I'm mostly a frontend specialist, but I also have experience in backend,
        smart contracts, and Rust. You could say my skills diagram is "F
        shaped".
      </p>
      <p>
        I have more than 6 years of professional experience. I had worked for
        companies and projects from all over the world.
      </p>
      <Button>My Portfolio</Button>
      <h5 className="mt-10">Follow me</h5>
      <p className="mb-1">
        Github: <small>gabrieldemian</small>
      </p>
      <p className="mb-1">
        Linkedin: <small>gabrieldemian</small>
      </p>
      <p className="mb-1">
        Twitter: <small>gabrieldemian</small>
      </p>
    </article>
  )
})

export const head: DocumentHead = {
  title: 'Gabriel Ribeiro'
}
