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
/ Please find below a selection of my   \\
| best work, accompanied by live        |
| examples. To access the corresponding |
| project, simply click on the relevant |
\\ image.                                /
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
        Projects that I developed professionally while working for companies or
        paid projects. (Not all are listed here).
      </p>

      <div class="grid md:grid-cols-2 gap-5 my-10">
        <Card
          href="https://enterthevault.app"
          title="The Vault"
          img="/vault.png"
          description="Highly interactive hub. Games, user profile, NFT mints, and more. Built in Nextjs."
        />
        <Card
          href="https://opensea.io/collection/inhabitants-dots"
          title="DOTs INFT"
          img="/dot.jpg"
          description="Interactive NFT for the DOTs collection on the Ethereum Blockchain. Built in Solidjs."
        />
      </div>
      <h5>Personal</h5>
      <p>
        Personal projects that I did for fun, for studying, or any other reason.
      </p>
      <div class="grid md:grid-cols-2 gap-5 my-10">
        <Card
          href="https://github.com/gabrieldemian/nextjs-ecommerce"
          title="Ecommerce"
          img="/ecommerce.webp"
          description="Complete ecommerce with cart, search, filter, checkout, and more. Built in Nextjs."
        />
        <Card
          href="https://github.com/gabrieldemian/black-dashboard"
          title="Dashboard"
          img="/dashboard.webp"
          description="Data-driven dashboard, with tables and graphs and animations. Built in Nextjs."
        />
        <Card
          href="https://github.com/gabrieldemian/p2p-chat"
          title="P2P Chat"
          img="/p2p.png"
          description="Peer-to-peer chat over a descentralized network, it also support sending files between peers. Built in rust."
        />
      </div>
    </article>
  )
})

export const head: DocumentHead = {
  title: 'Gabriel Ribeiro - Portfolio',
}
