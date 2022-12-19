import { component$ } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'
import { Card } from '~/components/ui'

export default component$(() => {
  return (
    <article class="container">
      <div class="mb-5 w-full block">
        <pre>
          <code>
            {`
   _______________________________________
  / Here you will see live examples of my \\
  | best work. Click on an image to be    |
  | redirected to it's corresponding      |
  \\ project.                              /
   ---------------------------------------
                      \\   ^__^
                       \\  (oo)\\_______
                          (__)\\       )\\/\\
                              ||----w |
                              ||     ||
            `}
          </code>
        </pre>
      </div>
      <h5>Professional</h5>
      <p>
        Projects that I developed professionally while working for companies or paid projects.
      </p>

      <div class="grid md:grid-cols-2 gap-5 my-10">
        <Card
          href="https://enterthevault.app"
          title="The Vault"
          img="/vault.png"
          description="Highly interactive hub. Games, user profile, animations, NFT drops, and more."
        />
        <Card
          href="https://opensea.io/collection/inhabitants-dots"
          title="DOTs INFT"
          img="/dot.jpg"
          description="Interactive NFT for the DOTs collection on Ethereum."
        />
        <Card
          href="/portfolio/powerup-summer"
          title="POWer up summer"
          img="/powerup-summer.webp"
          description="NFT drop of Gearpods, from the MetaHero Universe."
        />
      </div>
      <h5>Personal</h5>
      <p>
        Personal projects that I did for fun, for studying, or any other reason.
      </p>
      <div class="grid md:grid-cols-2 gap-5 my-10">
        <Card
          href="/portfolio/powerup-summer"
          title="Ecommerce"
          img="/ecommerce.webp"
          description="Complete ecommerce with cart, search, filter, and more."
        />
        <Card
          href="/portfolio/powerup-summer"
          title="Dashboard"
          img="/dashboard.webp"
          description="Data-driven dashboard, with tables and graphs."
        />
        <Card
          href="/portfolio/powerup-summer"
          title="P2P Chat"
          img="/p2p.png"
          description="Peer-to-peer chat over a descentralized network, built in Rust."
        />
      </div>
    </article>
  )
})

export const head: DocumentHead = {
  title: 'Gabriel Ribeiro - Portfolio'
}
