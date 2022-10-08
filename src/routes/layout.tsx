import { component$, Slot } from '@builder.io/qwik'
import { Nav } from '~/components/ui'

export default component$(() => {
  return (
    <main>
      <section>
        <Nav className="max-w-[80ch]" />
        <div class="min-h-screen">
          <Slot />
        </div>
        <footer className="py-5 text-center">
          <small className="text-surface2">
            © 2022 Gabriel Ribeiro. All Rights Reserved.
          </small>
        </footer>
      </section>
    </main>
  )
})
