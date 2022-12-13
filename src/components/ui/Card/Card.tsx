import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

interface Props {
  className?: string
  img: string
  title: string
  description: string
  href?: string
}

const Card = component$(
  ({ className = '', title, description, img, href }: Props) => {
    return (
      <div
        class={{
          'w-full': true,
          [className]: !!className
        }}
      >
        <Link href={href}>
          <img
            class="mb-2 w-full h-[170px] rounded-lg object-cover duration-300 overflow-hidden hover:scale-[102%]"
            width="100%"
            height="auto"
            src={img}
          />
        </Link>
        <Link href={href}>
          <p class="font-bold text-white mb-2">{title}</p>
        </Link>
        <p class="small">{description}</p>
      </div>
    )
  }
)

export default Card
